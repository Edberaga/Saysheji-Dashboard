import React, { useState, useEffect } from 'react'
import Header from '../../components/Header'
import './NewTeam.css'
import Sidebar from '../global/Sidebar'
import { Topbar } from '../global/Topbar'
import { Box } from '@mui/material'

import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useNavigate } from 'react-router-dom'

const NewTeam = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  //Declare percentage to measure the image process
  const [per, setPer] = useState(null);

  //to use react router navigation
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      /*To make the uploaded photo with name of timestamp, so it doesnt overwrite with file that has same name */
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on('state_changed', 
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          setPer(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
            default:
              break;
            }
          }, 
          (error) => {
            console.log(error);
          }, 
          () => {
            // Handle successful uploads on complete
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setData((prev) =>({...prev, img:downloadURL}))
            });
          }
        );
    };
    /*If there's upload file, will call the function uploadFile() */
    file && uploadFile();
  }, [file]);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]:value});
  };
  console.log(data);
  
  const handleAdd = async(e) => {
    e.preventDefault();
    try{
      /*Add User to the Firebase Auth */
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      updateProfile(auth.currentUser, {
        displayName: data.username,
        photoURL: data.img,
        phoneNumber: data.phone,
      });

      /*This will add the rest data, to the Firestore "User" doc*/
      await setDoc(doc(db, "users", res.user.email), {
        ...data,
        timeStamp: serverTimestamp(),
        role: "Team",
        id: res.user.uid,
      });
      navigate(-1);
      
    }catch(err){
      console.log(err);
    }
  }

  return (
  <>
  <main className="content">
  <Topbar/>
  <Box m="20px">
    <Header title='Add New Team'/>
    
    {/*Form Container */}
    <section className="form-container">
      <section className="left-form">
        <img 
        src={
          file ? URL.createObjectURL(file)
          :"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" }
        alt="Insert photo"
        />
      </section>

      <section className="right-form">
        <form onSubmit={handleAdd}>
          <div className="formInput" key="photoUrl">
            <label htmlFor="photoUrl">
              Image
            </label>
            <input 
              type="file" 
              id='photoUrl'
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <div className="formInput" key="username">
            <label>Display Name</label>
            <input type="text" id="username" onChange={handleInput} />
          </div>

          <div className="formInput" key="fullname">
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" onChange={handleInput} />
          </div>

          <div className="formInput" key="email">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleInput} />
          </div>

          <div className="formInput" key="phone">
            <label htmlFor="phone">Phone Number</label>
            <input type="text" id="phone" onChange={handleInput} />
          </div>

          <div className="formInput" key="password">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={handleInput} />
          </div>

          <div className="formInputFull" key="address">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" onChange={handleInput} />
          </div>

          <div className="formInput" key="team">
            <label htmlFor="departement">Team</label>
            <select id="departement" onChange={handleInput}>
              <option>Select the Team</option>
              <option value="Business">Business</option>
              <option value="IT">IT</option>
              <option value="Design">Design</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <div className="formInput" key="position">
            <label htmlFor="positon">Position</label>
            <select id="position" onChange={handleInput}>
              <option>Select the Job Position</option>

              <optgroup label="Business">
                <option value="Business development coordinator">Business development coordinator</option>
                <option value="Business Manager">Business Manager</option>
                <option value="Client Divisor">Client Divisor</option>
              </optgroup>

              <optgroup label="IT">
                <option value="Frontend Developer">Frontend Developer</option>
                <option value="Backend Developer">Backend Developer</option>
                <option value="FullStack Developer">FullStack Developer</option>
                <option value="Web Developer Intern">Web Developer Intern</option>
              </optgroup>

              <optgroup label='Design'>
                <option value="Digital Designer">Digital Designer</option>
                <option value="Digital Animator">Digital Animator</option>
                <option value="Digital Designer Intern">Digital Designer Intern</option>
              </optgroup>

              <optgroup label='Finance'>
                <option value="Financial Analyst">Financial Analyst</option>
                <option value="Purchasing Manager">Purchasing Manager</option>
                <option value="Senior Financial Analyst">Senior Financial Analyst</option>
              </optgroup>

              <optgroup label='Marketing'>
                <option value="Digital Markerter">Digital Markerter</option>
              </optgroup>
            </select>
          </div>
          <br/>
          <button disabled={per !== null && per < 100} type='submit' className='formSubmit'>Create Team</button>
        </form>
      </section>
    </section>
  </Box>
  </main>
</>
)}

export default NewTeam
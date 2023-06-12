import React, { useState } from 'react'
import Header from '../../components/Header'
import './NewTeam.css'
import Sidebar from '../global/Sidebar'
import { Topbar } from '../global/Topbar'
import { Box } from '@mui/material'

import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { async } from "@firebase/util"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from '../../firebase'

const NewTeam = () => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({...data, [id]:value});
    console.log(data);
  };
  
  const handleAdd = async(e) => {
    e.preventDefault();
    try{
      /*Add User to the Firebase Auth */
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      /*This will add the rest data, to the Firestore "User" doc*/
      await setDoc(doc(db, "team", res.user.email), {
        ...data,
        timeStamp: serverTimestamp(),
      });
    }catch(err){
      console.log(err);
    }
  }

  return (
  <>
  <Sidebar/>
  <main className="content">
  <Topbar/>
  <Box m="20px">
    <Header title='Add New Team'/>
    
    {/*Form Container */}
    <section className="form-container">
      <section className="left-form">
        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
        alt="Insert photo"
        />
      </section>

      <section className="right-form">
        <form onSubmit={handleAdd}>
          <div className="formInput" key="photoUrl">
            <label htmlFor="photoUrl">
              Image
            </label>
            <input type="file" id='photoUrl'/>
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
            <label htmlFor="team">Team</label>
            <select id="team" onChange={handleInput}>
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
          <button type='submit' className='formSubmit'>Create Team</button>
        </form>
      </section>
    </section>
  </Box>
  </main>
</>
)}

export default NewTeam
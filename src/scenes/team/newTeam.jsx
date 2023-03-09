import React from 'react'
import Header from '../../components/Header'
import './NewTeam.css'

const NewTeam = () => {
  return (
    <>
    <Header title='Add New Team'/>

    {/*Form Container */}
    <section className="form-container">
      <section className="left-form">
        <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" 
        alt="Insert photo"
        />
      </section>
      <section className="right-form">
        <form action="">
          <div className="formInput">
            <label htmlFor="">First Name</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formInput">
            <label htmlFor="">Middle & Last Name</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formInput">
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
          </div>
          <div className="formInput">
            <label htmlFor="">Phone Number</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formInput">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" />
          </div>
          <div className="formInput">
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" />
          </div>
          <div className="formInput">
            <label htmlFor="">Team</label>
            <select name="cars" id="cars">
              <option>Select a Team</option>
              <option value="Business">Business</option>
              <option value="IT">IT</option>
              <option value="Design">Design</option>
              <option value="Finance">Finance</option>
              <option value="Marketing">Marketing</option>
            </select>
          </div>

          <button>Create Team</button>
        </form>
      </section>
    </section>
    </>
  )
}

export default NewTeam
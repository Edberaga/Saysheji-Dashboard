import React from 'react'
import Header from '../../components/Header'
import './NewClient.css'
import Sidebar from '../global/Sidebar'
import { Topbar } from '../global/Topbar'
import { Box } from '@mui/material'

const NewClient = () => {
  return (
  <>
  <Sidebar/>
  <main className="content">
  <Topbar/>
  <Box m="20px">
    <Header title='Add New Client'/>
    
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
            <label htmlFor="file">
              Image
            </label>
            <input type="file" id='file'/>
          </div>

          <div className="formInput">
            <label htmlFor="">Display Name</label>
            <input type="text" name="" id="" />
          </div>

          <div className="formInput">
            <label htmlFor="">Full Name</label>
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

          <div className="formInputFull">
            <label htmlFor="">Address</label>
            <input type="text" name="" id="" />
          </div>

          <div className="formInput">
          <label htmlFor="company">Company Name</label>
            <input type="text" name="" id="company" />
          </div>

          <div className="formInput">
            <label htmlFor="positon">Position</label>
            <select name="" id="position">
              <option>Select the Job Position</option>
              <option value="CEO">CEO</option>
              <option value="Employee">Employee</option>
              <option value="Manager">Manager</option>
              <option value="Operator">Operator</option>
            </select>
          </div>
          <br/>
          <button className='formSubmit'>Add Client</button>
        </form>
      </section>
    </section>
  </Box>
  </main>
</>
)}

export default NewClient
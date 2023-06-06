import React, { useState }  from 'react'
import "./login.css"

const Login = () => {
  const { error, setError } = useState(false);

  return (
    <section className='login-page'>
        <form action="" className='login-form'>
            <input type="email" className='login-input' placeholder='youremail@saysheji.com'/>
            <input type="password" className='login-input' placeholder='password' />
            <button type="submit" className='login-submit'>Login</button>
            {error && <span className="login-validation">Incorrect Email or Password!</span>}
        </form>
    </section>
  )
}

export default Login
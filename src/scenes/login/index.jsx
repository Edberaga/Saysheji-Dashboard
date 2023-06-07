import React, { useState }  from 'react'
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from '../../firebase';
import "./login.css"
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [error, setError]  = useState(false);
  const [email, setEmail]  = useState("");
  const [password, setPassword]  = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      console.log(userCredential);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      setError(true);
    });
  }

  return (
    <main className="content">
      <section className='login-page'>
        <form onSubmit={handleLogin} className='login-form'>
            <input 
              type="email" 
              className='login-input' 
              placeholder='youremail@saysheji.com' 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input 
              type="password" 
              className='login-input' 
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className='login-submit'>Login</button>
            {error && <span className="login-validation">Incorrect Email or Password!</span>}
        </form>
      </section>
    </main>
    
  )
}

export default Login
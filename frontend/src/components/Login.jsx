import React, { useState } from 'react'
import '../components/Login.css'
import bgImage from "../assets/industry1.png"
import logo from "../assets/logo.png"
import grok from "../assets/grok.png"
import { LockKeyhole, Mail } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
     e.preventDefault();
    //  if(email == 'admin@123' && password == 'admin'){
    //     navigate('/siteai');
    //  }
    //  else{
    //   alert('InvalidCredentials....')
    //  }
    console.log('Email:', email);
    console.log('Password:', password);
    try {
       const response = await axios.post('http://localhost:5000/login', {
        email,
        password
       })
       if(response.data.success){
        toast.success('Login Successful!');
        navigate('/siteai');
       }
    }catch(error){
       console.error('Error during login:', error);
       toast.error('Login Failed. Please try again.');
    }
    
  }

  return (
    <div className='bg'
      style={{
        backgroundImage: `url(${bgImage})`,
      }}>
         <div className='overlay'></div>
      <div className='login-box'>
        <div className='upper'>
          <div class="container">
            <img
              src={logo} />
            <div>
              <span class="brand-name">Qualcomm</span>
              <br />
              <span class="brand-subtitle">
                AI-managed Autonomous Well Sites
              </span>
            </div>
          </div>
        </div>
        <div className='lower'>
          <div className='information'>
            <div>
              <h2>Welcome</h2>
            </div>
            <div>
              <form className='form' onSubmit={handleSubmit}>
                <div className='input'>
                  <label className='label'>Your Email</label>
                  <div className='input-wrapper'>
                    <input
                      className='input-css'
                      placeholder='madhukar@gmail.com'
                      type='email'
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <Mail className='mail-icon' />
                  </div>
                </div>
                <div className='input'>
                  <label className='label'>Password</label>
                  <div className='input-wrapper'>
                    <input
                      className='input-css'
                      type='password'
                      placeholder='********'
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <LockKeyhole className='password-icon' />
                  </div>
                </div>
                <button type='submit' className='button'>Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='footer'>
        <span className='span'>Powered By</span>
        <img src={grok} className='grok'/>
        <span className='span'>© 2025. All Rights Reserved</span>
      </div>
    </div>
  )
}

export default Login;

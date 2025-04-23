import React from 'react'
import '../components/Login.css'
import bgImage from "../assets/industry1.png"
import logo from "../assets/logo.png"
import grok from "../assets/grok.png"
import { LockKeyhole, Mail } from 'lucide-react'
const Login = () => {
  return (
    <div className='bg'
      style={{
        backgroundImage: `url(${bgImage})`,
        // filter: 'blur(3px)'
        // filter:'brightness(20%)'
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
              <form className='form'>
                <div className='input'>
                  <label className='label'>Your Email</label>
                  <div className='input-wrapper'>
                    <input
                      className='input-css'
                      placeholder='madhukar@gmail.com'
                      type='email'
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
                      required
                    />
                    <LockKeyhole className='password-icon' />
                  </div>
                </div>
                <button className='button'>Login</button>
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

export default Login

// 

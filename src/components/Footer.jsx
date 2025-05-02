import React from 'react'
import grok from "../assets/grok.png";
import "../components/Footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <span>Powered by</span>
      <img src={grok} className='' alt='grok'/>
    </div>
  )
}

export default Footer

import React, { useState } from 'react'
import '../components/Navbar.css';
import logo from "../assets/logo.png";
import { NavLink } from 'react-router-dom';
import siteai from "../assets/dashboard.png";
import notification from "../assets/notification.png";
import analytics from "../assets/analytics.png";
import Siteai from "../assets/siteai.png";
import icon from "../assets/iconnav.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((prev) => !prev);
  }

  return (
    <div>
      <nav className='navbar'>
        <div className='left'>
          <img src={logo} />
          <div>
            <span class="brand-name">Qualcomm</span>
            <br />
            <span class="brand-subtitle">
              AI-managed Autonomous Well Sites
            </span>
          </div>
        </div>
        <div className='right'>
          <div className='dashboard'>
            <NavLink to='/dashboard' className='nav-link'>
              <img src={siteai} alt='dashboard' className='nav-icon' />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to='/notification' className='nav-link'>
              <img src={notification} alt='notification' className='nav-icon' />
              <span>Notification</span>
            </NavLink>
            <NavLink to='/analytics' className='nav-link'>
              <img src={analytics} alt='analytics' className='nav-icon' />
              <span>Analytics</span>
            </NavLink>
            <NavLink to='/siteai' className='nav-link'>
              <img src={Siteai} alt='siteai' className='nav-icon' />
              <span>Site Ai</span>
            </NavLink>
          </div>
          <div className='profile'>
            <div><span className='profile-bio'>MS</span></div>
            <div className='profile-info'>
              <span className='profile-title'>Madhukar Singh</span>
              <br />
              <span className='profile-subtitle'>Developer</span>
            </div>
            <img
              src={icon}
              alt='Toggle'
              className={`profile-icon ${open ? 'rotate' : ''}`}
              onClick={toggleDropdown}
            />
            {open && (
              <div className="logout-dropdown">
                <button className="logout-button">Logout</button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

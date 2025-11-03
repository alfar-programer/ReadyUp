import React, { useState } from 'react'
import './header.css'

const Header = () => {
  // حالة تسجيل الدخول (مؤقتة، بعدين ممكن نربطها بـ Context أو Auth)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <header className="app-header">
      <div className='container-headr'>
        <div className='logo'>
          <img src="/public/imgs Brand/logo/logoReadyUP.png" alt="loading-logo" className='logoimg' />
        </div>

        <nav className='nav-links'>
          <ul className='nav-links-ul'>
            <li><a href="#">Home</a></li>
            <li><a href="#">Restaurants</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>

        <div className='header-buttons'>
          {isLoggedIn ? (
            <div className="user-menu">
              <img src="/public/imgs Brand/profile-icon.png" alt="Profile" className="profile-icon" />
              <button className="order-btn">My Orders</button>
              <button className="logout-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
            </div>
          ) : (
            <>
              <button className='login-btn' onClick={() => setIsLoggedIn(true)}> <a href="login"> Login</a></button>
              <button className='signup-btn'>Sign Up</button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

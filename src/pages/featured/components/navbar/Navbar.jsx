import React from 'react'
import '../../../../App.scss'

//assets
import Logo from '../../../../assets/logo.png'
import Bell from '../../../../assets/Bell.svg'
import Dropdown from '../../../../assets/Expand.svg'

const Navbar = () => {
  return (
    <div className='navbar-wrapper'>
      <div className="navbar-container">
        <div className="left-logo">
          <img src={Logo} alt="" />
        </div>
        <div className='nav-list'>
          <ul>
            <li>Wave</li>
            <li>Networks</li>
            <li>Messages</li>
          </ul>
        </div>
        <div className="search-bar">
          <input type="text" placeholder='Search' />
        </div>
        <div className="nav-icons">
          <div className="bell">
            <img src={Bell} alt="notifications" />
          </div>
          <div className="dropdown">
            <img src={Dropdown} alt="Expand" />
          </div>
          <div className="profile">
            <span>A</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import '../../../App.scss'

import { Link } from 'react-router-dom'
import { useState } from 'react'

//assets
import Logo from '../../../assets/logo.png'
import Bell from '../../../assets/Bell.svg'
import Dropdown from '../../../assets/Expand.svg'
import ActivityFeedModal from '../../../Modals/ActivityFeed/ActivityFeedModal'


const Navbar = () => {

  const [isOpened, setIsOpened] = useState(false)

  return (
    <div className='navbar-wrapper'>
      <div className="navbar-container">
        <div className="left-logo">
          <img src={Logo} alt="" />
        </div>
        <div className='nav-list'>
          <ul>
            <Link to="/featured" style={{ textDecoration:"None" }}>
              <li>Wave</li>
            </Link>
            <li>Networks</li>
            <li>Messages</li>
          </ul>
        </div>
        <div className="search-bar">
          <input type="text" placeholder='Search' />
        </div>
        <div className="nav-icons">
          <div className="bell">
            <img src={Bell} alt="notifications" onClick={() => setIsOpened(true)} />
          </div>
          <div className="dropdown">
            <img src={Dropdown} alt="Expand" />
          </div>
          <div className="profile">
            <span>A</span>
          </div>
        </div>
      </div>
      {isOpened && <ActivityFeedModal setIsOpened={setIsOpened} />}
    </div>
  )
}

export default Navbar
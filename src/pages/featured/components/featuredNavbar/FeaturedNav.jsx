import React, { useState } from 'react'
import '../../../../App.scss'

import Modal from '@mui/material/Modal'
import CreateNetworkModal from '../../../../Modals/CreateNetwork/CreateNetworkModal'

const FeaturedNav = () => {

  const [isOpen, setIsOpen] = useState(false)

  // const handleClose = () => {
  //   setIsOpen(false)
  // }

  // const handleOpen = () => {
  //   setIsOpen(true)
  // }

  return (
    <div className='featured-nav-container'>

      <div className="nav-list-item-left">
        <div className="nav-list">
          <p>Discover</p>
        </div>
        <div className="nav-list">
          <p>Networks</p>
        </div>
        <div className="nav-list">
          <p>Profiles</p>
        </div>
        <div className="nav-list">
          <p>News</p>
        </div>
      </div>

      <div className="nav-list-item-right">
        <div className="nav-list-create-network">
          <button onClick={() => setIsOpen(true)}>+</button>
          <p onClick={() => setIsOpen(true)}>Create</p>
        </div>
      </div>
      {isOpen && <CreateNetworkModal setIsOpen={setIsOpen} />}
    </div>
  )
}

export default FeaturedNav
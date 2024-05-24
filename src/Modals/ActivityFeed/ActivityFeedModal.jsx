import { Close } from '@mui/icons-material'
import React from 'react'
import '../../App.scss'

//assets
import Image from '../../assets/Image1.jpg'


const ActivityFeedModal = ({ setIsOpened }) => {
  return (
    <div className='modal-wrapper'>
      <div className="modal-container">
        <div className="modal-heading">
          <h1>Activity Feed</h1>
          <Close style={{ cursor: "pointer" }} onClick={() => setIsOpened(false)} />
        </div>
        <div className="modal-description">
          <div className="image">
            <img src={Image} alt="A" />
          </div>
          <div className="modal-info">
            <p>You're' invited to the network <span>Test</span></p>
            <div className="activity-time">
              <p>If you confirm please go to</p>
              <span>.</span>
              <p className='time'>2 months ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivityFeedModal
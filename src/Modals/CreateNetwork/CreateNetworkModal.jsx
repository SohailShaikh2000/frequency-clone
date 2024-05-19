import React from 'react'
import '../../App.scss'

//assets
import { Close } from '@mui/icons-material'

const CreateNetworkModal = ({ setIsOpen }) => {
  return (
    <div className='modal-wrapper' onClick={() => setIsOpen(false)}>
      <div className="modal-container">
        <div className="modal-heading">
          <p>Create</p>
          <Close style={{ cursor:"pointer" }} onClick={() => setIsOpen(false)} />
        </div>
        <div className="text-area">
          <textarea type='text' placeholder="What's on your mind?" rows={25} cols={70} />
        </div>
      </div>
    </div>
  )
}

export default CreateNetworkModal
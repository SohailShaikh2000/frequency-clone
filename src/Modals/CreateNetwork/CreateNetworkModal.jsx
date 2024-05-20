import React, { useState } from 'react'
import '../../App.scss'

//assets
import { Close } from '@mui/icons-material'
import AddPicture from '../../assets/AddPicture.svg'
import TagPeople from '../../assets/TagPeople.svg'


const CreateNetworkModal = ({ setIsOpen }) => {

  const [openAddPicture, setOpenAddPicture] = useState(false)
  const [addImage, setAddImage] = useState('')

  const handleChange = (e) => {
    setAddImage(e.target.files[0])
  }

  return (
    <div className='modal-wrapper'>
      <div className="modal-container">
        <div className="modal-heading">
          <p>Create</p>
          <Close style={{ cursor: "pointer" }} onClick={() => setIsOpen(false)} />
        </div>
        {
          openAddPicture === true ?
            <>
              <div className="text-area" style={{ display: "none" }}>
                <textarea type='text' placeholder="What's on your mind?" rows={25} cols={70} />
              </div>
            </>
            :
            <div className="text-area">
              <textarea type='text' placeholder="What's on your mind?" rows={25} cols={70} />
            </div>
        }
        {
          openAddPicture === true ?
            <>
              <div className="text-area">
                <textarea type='text' placeholder="What's on your mind?" rows={5} cols={70} />
              </div>

              <div className="add-img-container">
                <img src={AddPicture} alt="" className='add-picture-img' />
                <p>Drag Photos and Videos here</p>
                <div className="add-file">
                  <input type="file" name="file" onChange={handleChange} />
                </div>
                <button>Select from Computer</button>
              </div>

              <div className="add-to-post2">
                <p>Add to Post</p>
                <div className="icons">
                  <img src={AddPicture} alt="" />
                  <img src={TagPeople} alt="" />
                </div>
              </div>
            </>
            :
            <div className="add-to-post">
              <p>Add to Post</p>
              <div className="title">
              </div>
              <div className="icons">
                <img src={AddPicture} alt="" onClick={() => setOpenAddPicture(true)} />
                <img src={TagPeople} alt="" />
              </div>
            </div>
        }
        <div className="post-btn">
          <button>Post</button>
        </div>
      </div>
    </div>
  )
}

export default CreateNetworkModal
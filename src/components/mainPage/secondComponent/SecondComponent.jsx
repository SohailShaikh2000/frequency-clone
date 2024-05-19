import React from 'react'
import '../../../App.scss'

//assets
import Mobile from '../../../assets/mobile.png'

const SecondComponent = () => {
  return (
    <div className='second-component-container'>
      <div className="left-side">
        <img src={Mobile} alt="mobile" />
      </div>
      <div className="right-side">
        <div className="title">
          <h1>Connect With Your Communities On Frequency</h1>
        </div>
        <div className="info">
          <p>The Frequency app empowers users, brands, influencers, music artists, and podcasters to own hubs that monetize their followers through tickets sales, ads, subscription to exclusive live and AR content, as well as NFTs.</p>
        </div>
      </div>
    </div>
  )
}

export default SecondComponent
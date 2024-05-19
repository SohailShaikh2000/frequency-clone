import React from 'react'
import "../../../App.scss"

//assets
import GooglePlay from '../../../assets/GooglePlay.svg'
import AppleStore from '../../../assets/AppleStore.svg'
import Mobile1 from '../../../assets/mobile1.png'
import Mobile2 from '../../../assets/mobile2.png'
import Mobile3 from '../../../assets/mobile3.png'

const FirstMainPageComponent = () => {
  return (
    <div className='first-main-page-comp-container'>
      <div className="main-title">
        <h1>Frequency <br />The Network Generator</h1>
        <p>Our app empowers people to build communities</p>
      </div>
      <div className="store-link-imgs">
        <div className="google-play">
          <a href="https://play.google.com/store/apps/details?id=co.frequencyworld.app&hl=en_IN&gl=US">
            <img src={GooglePlay} alt="get it from Google play" />
          </a>
        </div>
        <div className="apple-store">
          <a href="https://www.apple.com/in/app-store/">
          <img src={AppleStore} alt="get it from Apple store" />
          </a>
        </div>
      </div>
        <div className="mobiles-container">
          <div className="mobile1">
            <img src={Mobile1} alt="mobile1" />
            <div className="description">
              <h1>Universe - Home</h1>
              <p>View universes recommended and featured networks and profiles.</p>
            </div>
          </div>
          <div className="mobile2">
            <img src={Mobile2} alt="mobile2" />
            <div className="description">
              <h1>Wave Feed - Networks</h1>
              <p>View recommended and featured networks and profiles.</p>
            </div>
          </div>
          <div className="mobile1">
            <img src={Mobile3} alt="mobile3" />
            <div className="description">
              <h1>Wave Feed - Discover</h1>
              <p>View all posts, react and comment on it.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FirstMainPageComponent
import React from 'react'
import '../../../App.scss'

//assets
import FooterLogo from '../../../assets/FooterLogo.png'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className='footer-container'>
        <div className="footer-img">
          <img src={FooterLogo} alt="logo" />
        </div>
        <div className="footer-links">
          <div className="privacy-policy">
            <p>Privacy Policy</p>
          </div>
          <div className="terms-of-use">
            <p>Terms of Use</p>
          </div>
        </div>
        <div className="footer-copyright">
          <p>Powered by SpokeHub, Inc. 2022 <span>&copy;</span></p>
        </div>
      </div>
    </div>
  )
}

export default Footer
import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.scss'

//components
import FirstMainPageComponent from '../../components/mainPage/firstComponent/FirstMainPageComponent'
import SecondComponent from '../../components/mainPage/secondComponent/SecondComponent'
import ThirdComponent from '../../components/mainPage/thirdComponent/ThirdComponent'
import Footer from '../../components/layout/footer/Footer'
//assets
import Logo from '../../assets/logo.png'
import FourthComponent from '../../components/mainPage/fourthComponent/FourthComponent'

const MainPage = () => {
  return (
    <div className='main-page-wrapper'>
      <div className="main-page-container">
        <div className="navbar">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="nav-btns">
            <div className="login-btn">
              <Link to='/login'>
                <button className='login'>Login</button>
              </Link>
            </div>
            <div className="sign-up-btn">
              <button className="sign-up">Sign Up</button>
            </div>
          </div>
        </div>
      </div>
      <FirstMainPageComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <Footer />
    </div>
  )
}

export default MainPage
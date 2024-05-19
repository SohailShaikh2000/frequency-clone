import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../App.scss'

//assets
import Logo from '../../assets/logo.png'

const LoginPage = () => {

  const [opened, setOpened] = useState(true)
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [signUpName, setSignUpName] = useState('')
  const [signUpEmail, setSignUpEmail] = useState('')
  const [signUpPassword, setSignUpPassword] = useState('')
  const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('')

  const navigate = useNavigate()

  // useEffect(() => {
  //   navigate('/featured')
  // }, [])

  const checkLoginBtnDisabled = () => {
    if (loginEmail.trim().length > 0 && loginPassword.trim().length > 0) {
      return false
    } else {
      return true
    }
  }

  const checkSignUpDisabled = () => {
    if (signUpName.trim().length > 0 && signUpEmail.trim().length > 0) {
      return false
    } else {
      return true
    }
  }

  const handleSubmit = () => {
    navigate('/featured')
  }


  return (
    <div className='login-page-wrapper'>
      <div className="login-page-container">
        <div className="left-side-container">
          <div className="heading">
            <img src={Logo} alt="frequency logo" />
          </div>
          <div className="registration-form">
            <h1>Register for free</h1>
            <div className="sign-up-inputs">
              <input type="text" placeholder='Name' value={signUpName} onChange={(e) => setSignUpName(e.target.value)} />
              <input type="email" placeholder='Email' value={signUpEmail} onChange={(e) => setSignUpEmail(e.target.value)} />
              <input type="password" placeholder='Password' value={signUpPassword} onChange={(e) => setSignUpPassword(e.target.value)} />
              <input type="password" placeholder='Confirm Password' value={signUpConfirmPassword} onChange={(e) => setSignUpConfirmPassword(e.target.value)} />
              {
                signUpPassword.trim().length > 0 && signUpConfirmPassword.trim().length > 0 && signUpPassword !== signUpConfirmPassword ?
                  <p style={{ fontSize: "12px", color: "red", position: "absolute", bottom: "-20px" }}>Password is not matching</p>
                  :
                  null
              }
            </div>
          </div>
          <div className="submit-btn">
            <button className="submit" disabled={checkSignUpDisabled()}>Join</button>
          </div>
        </div>
        <div className="right-side-container">
          <div className="heading">
            <img src={Logo} alt="logo" />
          </div>
          <div className="login-form">
            <h1>Login to your account</h1>
            <div className="login-inputs">
              <input type="email" placeholder='Email Address' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
              <input type="password" placeholder='Password' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
            </div>
          </div>
          <div className="submit-btn">
            <button className="submit" disabled={checkLoginBtnDisabled()} onClick={() => handleSubmit()} >Login</button>
          </div>
        </div>
        {
          opened ?
            <div className={opened ? "slider" : "right-slider"}>
              <div className="slider-container">
                <h1>New Here ?</h1>
                <p>Enter your personal details and start <br /> journey with us</p>
                <button onClick={() => setOpened(false)} >Join</button>
              </div>
            </div>
            :
            <div className={opened ? "slider" : "right-slider"}>
              <div className="slider-container">
                <h1>Welcome Back</h1>
                <p>To keep connected with us please login <br /> with your personal information</p>
                <button onClick={() => setOpened(true)} >Login</button>
              </div>
            </div>
        }
      </div>
    </div>
  )
}

export default LoginPage
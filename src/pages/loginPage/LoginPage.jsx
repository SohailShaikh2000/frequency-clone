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
  // const [signUpName, setSignUpName] = useState('')
  // const [signUpEmail, setSignUpEmail] = useState('')
  // const [signUpPassword, setSignUpPassword] = useState('')
  // const [signUpConfirmPassword, setSignUpConfirmPassword] = useState('')

  const [userData, setUserData] = useState({
    name:"", email:"", password:"", confirmPassword:"",
  })


  const handleSignIn = () => {
    setOpened(true)
  }
  
  useEffect(() => {
    const data = window.localStorage.getItem("USER_DATA")
    if (data !== null ) setUserData(JSON.parse(data))
}, [])

  useEffect(() => {
    window.localStorage.setItem("USER_DATA", JSON.stringify(userData))
  }, [userData])

  const navigate = useNavigate()

  // useEffect(() => {
  //   navigate('/featured')
  // }, [])

  const checkLoginBtnDisabled = () => {
    if (userData.email === loginEmail && loginEmail !== "" && loginPassword !== "" && userData.password === loginPassword) {
      return false
    } else {
      return true
    }
  }

  const checkSignUpDisabled = () => {
    if (userData.name.trim().length > 0 && userData.email.trim().length > 0) {
      return false
    } else {
      return true
    }
  }

 
  const handleSubmit = () => {
    navigate('/featured')
  }

  let name, value
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value

    setUserData({...userData, [name]:value})
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
              <input type="text" placeholder='Name' name='name' value={userData.name} onChange={handleInput} />
              <input type="email" placeholder='Email' name='email' value={userData.email} onChange={handleInput} />
              <input type="password" placeholder='Password' name='password' value={userData.password} onChange={handleInput} />
              <input type="password" placeholder='Confirm Password' name='confirmPassword' value={userData.confirmPassword} onChange={handleInput} />
              {
                userData.password.trim().length > 0 && userData.confirmPassword.trim().length > 0 && userData.password !== userData.confirmPassword ?
                  <p style={{ fontSize: "12px", color: "red", position: "absolute", bottom: "-20px" }}>Password is not matching</p>
                  :
                  null
              }
            </div>
          </div>
          <div className="submit-btn">
            <button className="submit" disabled={checkSignUpDisabled()} onClick={handleSignIn}>Join</button>
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
import { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import './Login.css'

function Login() {
  return (
    <div className="login-root" >
      <div className="login-guest-container"  >
          <button className="login-button-guest" >
            Login as Patient
          </button>
      </div>
      <div className="login-container-root">
        <div className="login-container">
          <img
            className="logo"
            src="https://github.com/JDgomez2002/Proj2_DBI_production/blob/main/Proj2-DBI-production/src/img/stethoscope-icon.png?raw=true"
          />
          <div className="login-labels">Username:</div>
          <input id="input-username" className="input-login" ></input>
          <div className="login-labels">Password:</div>
          <input id="input-password" className="input-login" ></input>
          <button className="login-button" >
            Login
          </button>
          <button className="sign-in-button-link" >
            Sign in
          </button>
          <div id="div-login-status" className="div-login-message"></div>
          <div id="div-login-loading" className="div-login-message" style={{fontSize:'20px'}}></div>
        </div>
      </div>
    </div>
  )
}

export default Login

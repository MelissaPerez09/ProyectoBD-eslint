import React from "react"
import "./Login.css"

function Login() {
    return (
        <div className="login-root">
            <div className="login-guest-container">
                <button className="login-button-guest" type="button">
                    Login as Patient
                </button>
            </div>
            <div className="login-container-root">
                <div className="login-container">
                    <img
                        alt="logo"
                        className="logo"
                        src="https://github.com/JDgomez2002/Proj2_DBI_production/blob/main/Proj2-DBI-production/src/img/stethoscope-icon.png?raw=true"
                    />
                    <div className="login-labels">Username:</div>
                    <input id="input-username" className="input-login" />
                    <div className="login-labels">Password:</div>
                    <input id="input-password" className="input-login" />
                    <button className="login-button" type="button">
                        Login
                    </button>
                    <button className="sign-in-button-link" type="button">
                        Sign in
                    </button>
                    <div id="div-login-status" className="div-login-message" />
                    <div
                        id="div-login-loading"
                        className="div-login-message"
                        style={{ fontSize: "20px" }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Login

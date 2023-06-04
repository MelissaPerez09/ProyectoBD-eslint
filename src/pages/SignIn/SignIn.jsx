import "./SignIn.css"
import React from "react"

function SignIn() {
    return (
        <div className="signin-root">
            <div className="sign-in-container">
                <img
                    alt="logo"
                    className="logo"
                    src="https://github.com/JDgomez2002/Proj2_DBI_production/blob/main/Proj2-DBI-production/src/img/stethoscope-icon.png?raw=true"
                />
                <div className="login-labels">Username:</div>
                <input id="input-username" className="input-login" />
                <div className="login-labels">Password:</div>
                <input id="input-password" className="input-login" />
                <div className="login-labels">Confirm password:</div>
                <input id="input-confirm-password" className="input-login" />
                <label className="checkbox-label-doctor" htmlFor="inputName">
                    <input
                        type="checkbox"
                        id="input-role"
                        className="input-checkbox-doctor"
                    />
                    Doctor
                </label>
                <button className="sign-in-button" type="button">
                    Sign in
                </button>
                <button className="login-button-link" type="button">
                    Back to Login
                </button>
                <div id="div-sign-in-status" className="div-login-message" />
            </div>
        </div>
    )
}

export default SignIn

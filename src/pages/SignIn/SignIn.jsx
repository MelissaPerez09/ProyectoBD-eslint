import './SignIn.css'

function SignIn() {

  return (
    <div className="signin-root" >
      <div className="sign-in-container">
        <img
          className="logo"
          src="https://github.com/JDgomez2002/Proj2_DBI_production/blob/main/Proj2-DBI-production/src/img/stethoscope-icon.png?raw=true"
        />
        <div className="login-labels">Username:</div>
        <input id="input-username" className="input-login"></input>
        <div className="login-labels">Password:</div>
        <input id="input-password" className="input-login"></input>
        <div className="login-labels">Confirm password:</div>
        <input id="input-confirm-password"  className="input-login"></input>
        <label className="checkbox-label-doctor">
          <input
            type="checkbox"
            id="input-role"
            className="input-checkbox-doctor"
          />
          Doctor
        </label>
        <button className="sign-in-button" >
          Sign in
        </button>
        <button className="login-button-link" >
          Back to Login
        </button>
        <div id="div-sign-in-status" className="div-login-message"></div>
      </div>
    </div>
  )
}

export default SignIn

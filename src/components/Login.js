import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="form">
            <h4 className="form-heading">Login</h4>
            <div className="form-container">
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input className="form-input" type="text" id="email" placeholder="Enter your email..."/>
                </div>
                <div className="form-row">
                    <div className="forgot-div">
                        <label className="form-label" htmlFor="password">Password</label>
                        <Link className="link" style={{"alignSelf":"flex-end"}} to="/forgotPassword">Forgot your password?</Link>
                    </div>                    
                    <input className="form-input" type="text" id="password" placeholder="Enter your Password..." />
                </div>
                <button type= "submit" className ="submit-button"> Login</button>
            </form>
            </div>
            <p className="redirection-para">
                New to MyJobs? <Link className="link" to="/signUp">Create an account</Link>
            </p>
        </div>
    )
}

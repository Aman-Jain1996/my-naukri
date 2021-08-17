import React from 'react'
import {Link} from "react-router-dom"

export default function ForgotPassword() {
    return (
        <div className="form">
            <h4 className="form-heading">Forgot your password ?</h4>
            <div className="form-container">
                <p className="forgot-para">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input className="form-input" type="text" id="email" placeholder="Enter your email..."/>
                </div>
                <button type= "submit" className ="submit-button"><Link to="/resetPassword">Submit</Link></button>
            </form>
            </div>
        </div>
    )
}

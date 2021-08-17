import React from 'react'
import { Link } from 'react-router-dom'

export default function ResetPassword() {
    return (
        <div className="form">
            <h4 className="form-heading">Reset Your Password</h4>
            <div className="form-container">
                <p className="forgot-para">Enter your new password below.</p>
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="password">New password</label>
                    <input className="form-input" type="text" id="password" placeholder="Enter your password..."/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="cnfrm-password">Confirm new password</label>
                    <input className="form-input" type="text" id="cnfrm-password" placeholder="Enter your password..."/>
                </div>
                <button type= "submit" className ="submit-button"><Link to="/login">Reset</Link></button>
            </form>
            </div>
        </div>
    )
}

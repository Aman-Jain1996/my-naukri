import React from 'react'
import {Link} from "react-router-dom"

export default function SignUp() {
    return (
        <div className="form signUp">
            <h4 className="form-heading">Signup</h4>
            <div className="form-container">
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="name">Full Name*</label>
                    <input className="form-input" type="text" id="name" placeholder="Enter your full name..."/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">Email Address*</label>
                    <input className="form-input" type="text" id="email" placeholder="Enter your email..."/>
                </div>
                <div className="password-div">
                    <div className="form-row">
                        <label className="form-label" htmlFor="password">Create Password*</label>                 
                        <input className="form-input" type="text" id="password" placeholder="Enter your Password..." />
                    </div>
                    <div className="form-row">
                        <label className="form-label" htmlFor="cnfrm-password">Confirm Password*</label>                 
                        <input className="form-input" type="text" id="cnfrm-password" placeholder="Enter your Password..." />
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="skills">Skills</label>                 
                    <input className="form-input" type="text" id="skills" placeholder="Enter comma seperated skills" />
                </div>
                <button type= "submit" className ="submit-button"> Signup</button>
            </form>
            </div>
            <p className="redirection-para">
                Have an account? <Link className="link" to="/login">Login</Link>
            </p>
        </div>
    )
}

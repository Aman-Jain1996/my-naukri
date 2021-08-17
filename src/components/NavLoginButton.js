import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLoginButton() {
    return (
        <div className="navBar-button">
            <button><Link to="/login">Login/SignUp</Link></button>
        </div>
    )
}

import React from 'react'
import NavLoginButton from './NavLoginButton'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom';

export default function NavBar() {
    const location = useLocation();
    const buttonComp = ["/login","/signUp"]
    return (
        <div>
            <div className="nav-bar">
                <div className="navBar-header">
                    <Link to="/">My<span className="header-span">Jobs</span></Link>
                </div>
                {!buttonComp.includes(location.pathname) ? <NavLoginButton /> : null}
            </div>
        </div>
    )
}

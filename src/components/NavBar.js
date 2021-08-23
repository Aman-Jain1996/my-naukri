import React from 'react'
import NavLoginButton from './NavLoginButton'
import { useLocation } from 'react-router'

export default function NavBar() {
    const location = useLocation();
    const buttonComp = ["/","/forgotPassword","/resetPassword"];

    return (
        <div>
            <div className="nav-bar">
                <div className="navBar-header">
                    My<span className="header-span">Jobs</span>
                </div>
                {buttonComp.includes(location.pathname) ? <NavLoginButton /> : null}
            </div>
        </div>
    )
}

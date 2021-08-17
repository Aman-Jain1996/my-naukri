import React from 'react'
import NavLoginButton from './NavLoginButton'
import { useLocation } from 'react-router'

export default function NavBar(props) {
    const location = useLocation()
    return (
        <div>
            <div className="nav-bar">
                <div className="navBar-header">
                    My<span className="header-span">Jobs</span>
                </div>
                {location.pathname === '/' ? <NavLoginButton /> : null}
            </div>
        </div>
    )
}

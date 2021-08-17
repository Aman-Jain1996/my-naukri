import React from 'react';
import '../App.css';
import {BrowserRouter as Router , Link , Route} from 'react-router-dom';
import Login from '../components/Login.js';
import NavLoginButton from './NavLoginButton';

export default function NavBar(props) {
    return (
        <div>
            <div className="nav-bar">
                <div className="navBar-header">
                    My<span className="header-span">Jobs</span>
                </div>
                {props.comp === 'Home' ? <NavLoginButton /> : null }
            </div>
        </div>
    )
}

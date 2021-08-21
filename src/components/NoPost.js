import React from 'react'
import { Link } from 'react-router-dom'

export default function NoPost() {
    return (
        <div className="noPosts-div">
                <img alt="" src="AddPost.svg" className="addPost-image"></img>
                <p >Your Posted jobs will show here</p>
                <button className="header-button">
                    <Link to="/postJob">Post a Job</Link>
                </button>
            </div>
    )
}

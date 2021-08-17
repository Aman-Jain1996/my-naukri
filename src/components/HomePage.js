import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from './NavBar.js'

export default function HomePage() {
    return (
        <div>
            <div className="homepageUpperDiv">
                <header>
                    <div className="header-heading">
                        <p>Welcome to My<span className="header-span">Jobs</span></p>
                        <button className="header-button">
                            <Link to="/signUp">Get Started</Link>
                        </button>
                    </div>

                    <img className="header-image" alt="header image" src="header-img.jpg" />
                </header>
            </div>

            <div className="main-body">
                <span className="mainBody-header" >Why Us</span>
                <div className="cards">
                    <div className="card">
                        <span>Get More Visibility</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae culpa vitae, rem amet corporis, tenetur libero ex, neque iusto velit obcaecati dolor eveniet perferendis et.</p>
                    </div>
                    <div className="card">
                        <span>Organize Your Candidates</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae culpa vitae, rem amet corporis, tenetur libero ex, neque iusto velit obcaecati dolor eveniet perferendis et.</p>
                    </div>
                    <div className="card">
                        <span>Verify Their Abilities</span>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae culpa vitae, rem amet corporis, tenetur libero ex, neque iusto velit obcaecati dolor eveniet perferendis et.</p>
                    </div>
                </div>
            </div>

            <div className="brands-body">
                <span className="mainBody-header" >Companies Who Trust Us</span>
                <div className="cards">
                    <div className="logo">
                        <img alt="logo" src="idea.jpg"></img>
                    </div>

                    <div className="logo">
                        <img alt="logo" src="liva.png"></img>
                    </div>

                    <div className="logo">
                        <img alt="logo" src="solaytic.png"></img>
                    </div>

                    <div className="logo">
                        <img alt="logo" src="velocity.png"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

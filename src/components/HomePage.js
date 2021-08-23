import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useState ,useEffect } from 'react';

export default function HomePage(props) {

    const location = useLocation()
    const history = useHistory()
    const [logOut, setlogOut] = useState(false);

    useEffect(() => {
        if(location.search === "?Logout"){
            setlogOut(true);
        }
    },[location.search])
    
    function closeHandler(e){
        document.querySelector(".logoutAlert-success").style.display = "none";
        history.push("/")
    }
    
    return (
        <div>
            <div className="homepageUpperDiv">
                {logOut && <div className="logoutAlert-success" >
                    <span id="content">Logged out successfully</span>
                    <span id="close" onClick={closeHandler}>X</span>
                    </div>
                }
                <header>
                    <div className="header-heading">
                        <p>Welcome to My<span className="header-span">Jobs</span></p>
                        <button className="header-button">
                            <Link to="/signUp">Get Started</Link>
                        </button>
                    </div>
                    <img className="header-image" alt="" src="header-img.jpg" />
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

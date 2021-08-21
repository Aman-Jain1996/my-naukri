import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

export default function HomePage(props) {

    const location = useLocation()
    const history = useHistory();
    
    function closeHandler(e){
        document.querySelector(".logoutAlert-success").style.display = "none";
    }

    function logout(){
        if(location.state!==undefined && location.state.data === "Logout"){
            history.location.state.data=undefined;
            console.log("aman")
            return (<div className="logoutAlert-success" >
            <span id="content">Logged out successfully</span>
            <span id="close" onClick={closeHandler}>X</span>
        </div>)
        }else{
            console.log("amam")
            return null;
        }
    }
    
    return (
        <div>
            <div className="homepageUpperDiv">
                {logout()}
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

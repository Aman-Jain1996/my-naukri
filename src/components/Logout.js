import React from 'react'
import { Link, useHistory } from 'react-router-dom';

export default function Logout() {

    let count =0;
    const history = useHistory();

    function clickHandler(e){
        if(count%2 === 0){
            document.querySelector("#arrow-down").style.display ="none";
            document.querySelector("#arrow-up").style.display ="inline-block";
            document.querySelector(".logoutAlert-div").style.display ="inline-block";
        }else{
            document.querySelector("#arrow-down").style.display ="inline-block";
            document.querySelector("#arrow-up").style.display ="none";
            document.querySelector(".logoutAlert-div").style.display ="none";
        }
        count++;
    }

    return (
        <div>
            <div className="jobPost-link">
                <Link to="/postJob">Post a Job</Link>
            </div>
            <div className="logout-div">
                <span className="nameInitial">{localStorage.getItem("userName").toUpperCase()[0]}</span>
            </div>
            <span className="arrow-span" id="arrow-down" onClick={clickHandler} >▼</span>
            <span className="arrow-span" id="arrow-up" onClick={clickHandler} >▲</span>

            <div className="logoutAlert-div" >
                <span onClick={() => {
                    history.push({pathname:"/",search:'Logout'})}}>
                        Logout
                </span>
            </div>
        </div>
    )
}

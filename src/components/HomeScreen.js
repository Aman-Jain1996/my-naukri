import axios from 'axios';
import {React,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import NoPost from './NoPost';

export default function HomeScreen(props) {
    let count =0;
    const history =useHistory()

    useEffect(() => {
        document.querySelector(".homepageUpperDiv").style.height ="210px";
    },[])

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
        <>
            <div className="jobPost-link">
                <Link to="/postJob">Post a Job</Link>
            </div>
            <div className="logout-div">
                <span className="nameInitial">{localStorage.getItem("userName").toUpperCase()[0]}</span>
            </div>
            <span className="arrow-span" id="arrow-down" onClick={clickHandler} >▼</span>
            <span className="arrow-span" id="arrow-up" onClick={clickHandler} >▲</span>
            <div className="redirection-Link">
                <span>🏠 Home</span>
                Jobs posted by you
            </div>
            <div className="logoutAlert-div" >
                <span onClick={() => {
                    history.push({pathname:"/?Logout"})}}>
                        Logout
                </span>
            </div>
            <NoPost />
            <div className="posts-Div">

            </div>
            
        </>)
}

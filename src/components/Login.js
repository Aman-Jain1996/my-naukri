import React from 'react'
import { Link,  useHistory } from 'react-router-dom'
import {useState} from "react";
import { baseUrl } from '../App';

import axios from 'axios';

export default function Login() {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    function changeHandler(e){
        setError("");
        const name = e.target.name;
        name === "email" ? setEmail(e.target.value) : setPassword(e.target.value);
    }

    function submitHandler(e){
        document.querySelector("#success-para").innerText="";
        var emailField = document.querySelector("#email");
        var passwordField = document.querySelector("#password");
        e.preventDefault();
        if(email === "" && password === ""){
            setError("Email and Password fields are mandatory");
            emailField.style.borderColor="red";
            passwordField.style.borderColor="red";
        }
        else if(email === ""){
            setError("Email field is mandatory");
            emailField.style.borderColor="red";
            passwordField.style.borderColor="";
        }
        else if(password === ""){
            setError("Password field is mandatory");
            passwordField.style.borderColor="red";
            emailField.style.borderColor="";
        }
        else{
            emailField.style.borderColor="";
            passwordField.style.borderColor="";

            let data ={
                "email":email,
                "password":password
            }

            axios.post(baseUrl + "/auth/login",data)
            .then(res => {
                setError("");
                let responseData = res.data;
                localStorage.setItem("userEmail",responseData.data.email)
                localStorage.setItem("userToken",responseData.data.token)
                localStorage.setItem("userName",responseData.data.name)
                document.querySelector("#success-para").innerText="Logged in Successfully....";
                setTimeout(()=>{
                    history.push("/homescreen");
                },1000)
            })
            .catch(err => {
                if(err.response.data.message !== undefined)
                    setError(err.response.data.message);
                else if(err.response.data.errors !== undefined){
                    setError(err.response.data.errors[0].email);
                }
            })
        }
    }

    return (
        <div className="form">
            <h4 className="form-heading">Login</h4>
            <div className="form-container">
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input className="form-input" type="text" id="email" name="email" onChange={changeHandler} placeholder="Enter your email..."/>
                </div>
                <div className="form-row">
                    <div className="forgot-div">
                        <label className="form-label" htmlFor="password">Password</label>
                        <Link className="link" style={{"alignSelf":"flex-end"}} to="/forgotPassword">Forgot your password?</Link>
                    </div>                    
                    <input className="form-input" type="text" name="password" id="password" onChange={changeHandler} placeholder="Enter your Password..." />
                    <p className="error">{error}</p>
                    <p className="success" id="success-para"></p>
                </div>
                <button className ="submit-button" onClick={submitHandler}>Login</button>
            </form>
            </div>
            <p className="redirection-para">
                New to MyJobs? <Link className="link" to="/signup">Create an account</Link>
            </p>
        </div>
    )
}

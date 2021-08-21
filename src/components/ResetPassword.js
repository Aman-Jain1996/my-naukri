import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../App';
import { useHistory } from 'react-router';

export default function ResetPassword() {

    const history = useHistory();
    
    const [password, setpassword] = useState("");
    const [confirmPass, setconfirmPass] = useState("");
    const [error, seterror] = useState("")

    function changeHandler(e){
        e.target.name === "password" ? setpassword(e.target.value) : setconfirmPass(e.target.value);
    }

    function clickHandler(e){
        e.preventDefault();
        document.querySelector("#success-para").innerHTML="";
        let passField = document.querySelector("#password");
        let confirmPassField = document.querySelector("#cnfrm-password");
        passField.style.borderColor = "";
        confirmPassField.style.borderColor = "";
        seterror("");
        if(password === "" || confirmPass ===""){
            seterror("All Fields are Mandatory.");
            passField.style.borderColor = "red";
            confirmPassField.style.borderColor = "red";
        }else{
            axios.get(baseUrl+"/auth/resetpassword/"+localStorage.getItem("userToken"))
            .then(res => {
                let data ={
                    password,
                    confirmPassword:confirmPass,
                    token:localStorage.getItem("userToken")
                }

                axios.post(baseUrl+"/auth/resetpassword",data)
                .then(res => {
                    let responseData = res.data;
                    localStorage.setItem("userEmail",responseData.data.email);
                    localStorage.setItem("userToken",responseData.data.token);
                    document.querySelector("#success-para").innerHTML = responseData.message;
                    setTimeout(()=>{
                        history.push("/")
                    },2000)
                })
                .catch(err => {
                    let errorData = err.response.data;
                    seterror(errorData.message)
                })
            })
            .catch(err => seterror("User not Authenticated"))
        }
    }

    return (
        <div className="form">
            <h4 className="form-heading">Reset Your Password</h4>
            <div className="form-container">
                <p className="forgot-para">Enter your new password below.</p>
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="password">New password</label>
                    <input className="form-input" type="text" id="password" onChange={changeHandler} name="password" placeholder="Enter your password..."/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="cnfrm-password">Confirm new password</label>
                    <input className="form-input" type="text" id="cnfrm-password" onChange={changeHandler} name="confirmPass" placeholder="Enter your password..."/>
                    <p className="error">{error}</p>
                    <p className="success" id="success-para"></p>
                </div>
                <button onClick={clickHandler} className ="submit-button">Reset</button>
            </form>
            </div>
        </div>
    )
}

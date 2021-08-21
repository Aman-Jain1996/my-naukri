import React from 'react'
import { useHistory} from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../App';

export default function ForgotPassword() {

    const history = useHistory();

    const [email, setemail] = useState("");
    const [error, seterror] = useState("")

    function changeHandler(e){
        setemail(e.target.value);
    }

    function clickHandler(e)
    {
        let emailField = document.querySelector("#email");
        emailField.style.borderColor = "";
        e.preventDefault();
        seterror("");
        if(email === ""){
            seterror("This field is mandatory");
            emailField.style.borderColor = "red";
        }
        else{
            axios.get(baseUrl+"/auth/resetpassword?email="+email)
            .then(res => {
                let responseData = res.data;
                localStorage.setItem("userEmail",responseData.data.email);
                localStorage.setItem("userToken",responseData.data.token);
                history.push("/resetPassword")
            })
            .catch(err => {
                console.log(err.response)
                seterror(err.response.data.message)
            })
        }
    }

    return (
        <div className="form">
            <h4 className="form-heading">Forgot your password ?</h4>
            <div className="form-container">
                <p className="forgot-para">Enter the email associated with your account and we’ll send you instructions to reset your password.</p>
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">Email address</label>
                    <input className="form-input" type="text" id="email" name="email" onChange={changeHandler} placeholder="Enter your email..."/>
                    <p className="error">{error}</p>
                </div>
                <button onClick={clickHandler} className ="submit-button">Submit</button>
            </form>
            </div>
        </div>
    )
}

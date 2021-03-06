import React from 'react'
import {Link, useHistory} from "react-router-dom"
import { useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../App';

export default function SignUp() {

    const [email, setemail] = useState("");
    const history = useHistory();
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [name, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [userRole, setRole] = useState(0);
    const [error,setError]=useState({});

    function changeHandler(e){
        let nameField = document.querySelector("#name");
        let passField = document.querySelector("#password");
        let cnfrmField = document.querySelector("#cnfrm-password");
        let emailField = document.querySelector("#email");
        let skillsField = document.querySelector("#skills");

        let fieldName = e.target.name;
        if(fieldName === "name") setName(e.target.value)
        if(fieldName === "password") setPassword(e.target.value)
        if(fieldName === "skills") setSkills(e.target.value)
        if(fieldName === "confirmPass") setconfirmPassword(e.target.value)
        if(fieldName === "email") setemail(e.target.value)
        if(fieldName === "option") setRole(e.target.value)
        nameField.style.borderColor="";
        passField.style.borderColor="";
        cnfrmField.style.borderColor="";
        emailField.style.borderColor="";
        skillsField.style.borderColor="";
    }

    function submitHandler(e){
        document.querySelector("#success-para").innerText="";
        e.preventDefault();
        let nameField = document.querySelector("#name");
        let passField = document.querySelector("#password");
        let cnfrmField = document.querySelector("#cnfrm-password");
        let emailField = document.querySelector("#email");
        let skillsField = document.querySelector("#skills");
    
        let errors={};
        // setError(errors);
        if(name === "" )
        {
            errors.name="This field is mandatory";
            nameField.style.borderColor="red";
            setError(errors)
        }
        if(email === "")
        {
            errors.email="This field is mandatory";
            emailField.style.borderColor="red";
            setError(errors)
        }
        if(password=== ""||confirmPassword=== "")
        {
            errors.password="This field is mandatory";
            passField.style.borderColor="red";
            cnfrmField.style.borderColor="red";
            setError(errors)
        }
        if(skills === "")
        {
            errors.message="This field is mandatory";
            skillsField.style.borderColor="red";
            setError(errors)
        }
        else{
            nameField.style.borderColor="";
            passField.style.borderColor="";
            cnfrmField.style.borderColor="";
            emailField.style.borderColor="";

            let data = {email,userRole:Number(userRole),password,confirmPassword,name,skills};

            axios.post(baseUrl + "/auth/register",data)
            .then(res => {
                let responseData = res.data;
                document.querySelector("#success-para").innerText="SignUp Successful .....";
                localStorage.setItem("userEmail",responseData.data.email);
                localStorage.setItem("userToken",responseData.data.token);
                localStorage.setItem("userName",responseData.data.name);
                setTimeout(()=>{
                    history.push("/homescreen");
                },1000);
            })
            .catch(err => {
                if(err.response.data.message !== undefined)
                    errors.message=err.response.data.message;
                else if(err.response.data.errors !== undefined){
                    let errData = err.response.data.errors;
                    for(let key of Object.keys(errData)){
                        if(errData[key].name !==undefined)
                            errors.name = errData[key].name;
                        else if(errData[key].password !==undefined)
                            errors.password = errData[key].password;
                        else if(errData[key].email !==undefined)
                            errors.email = errData[key].email;
                        else if(errData[key].confirmPassword !== undefined)
                            errors.password = errData[key].confirmPassword;
                        else if(errData[key].skills !== undefined)
                            errors.message = errData[key].skills;
                    }
                }
                setError(errors)
            })
        }
    }

    return (
        <div className="form-wrapper">
            <div className="form signUp">
            <h4 className="form-heading">Signup</h4>
            <div className="form-container">
            <form>
                <div className="form-row">
                    <label className="form-label" >I'm a</label>
                    <ul className="donate-now">
                        <li>
                            <input type="radio" id="recruiter"  onChange={changeHandler} defaultChecked name="option" value="0" />
                            <label htmlFor="recruiter">Recruiter</label>
                        </li>
                        <li>
                        <input type="radio" id="candidate" value="1" onChange={changeHandler} name="option" />
                            <label htmlFor="candidate">Candidate</label>
                        </li>
                    </ul>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="name">Full Name*</label>
                    <input className="form-input" onChange={changeHandler} type="text" name="name" id="name" placeholder="Enter your full name..."/>
                    <p className="error">{error.name}</p>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="email">Email Address*</label>
                    <input className="form-input" onChange={changeHandler} type="text" name="email" id="email" placeholder="Enter your email..."/>
                    <p className="error">{error.email}</p>
                </div>
                <div className="password-div">
                    <div className="form-row">
                        <label className="form-label" htmlFor="password">Create Password*</label>                 
                        <input className="form-input" onChange={changeHandler} type="text" id="password" placeholder="Enter your Password..." name="password" />
                    </div>
                    <div className="form-row">
                        <label className="form-label" htmlFor="cnfrm-password">Confirm Password*</label>                 
                        <input className="form-input" onChange={changeHandler} type="text" id="cnfrm-password" placeholder="Enter your Password..." name="confirmPass" />
                        <p className="error">{error.password}</p>
                    </div>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="skills">Skills</label>                 
                    <input className="form-input" onChange={changeHandler} type="text" id="skills" placeholder="Enter comma seperated skills" name="skills" />
                    <p className="error">{error.message}</p>
                    <p className="success" id="success-para" ></p>
                </div>
                <button className ="submit-button" onClick={submitHandler}> Signup</button>
            </form>
            </div>
            <p className="redirection-para">
                Have an account? <Link className="link" to="/login">Login</Link>
            </p>
            </div>
        </div>
        
    )
}



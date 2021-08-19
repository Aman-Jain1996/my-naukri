import React from 'react'
import {Link} from "react-router-dom"
import { useState } from 'react';

export default function SignUp() {

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmpass] = useState("");
    const [name, setName] = useState("");
    const [skills, setSkills] = useState("");
    const [role, setRole] = useState(0);
    const[error,setError]=useState({name:"",password:"",email:""});

    function changeHandler(e){
        let fieldName = e.target.name;
        if(fieldName === "name") setName(e.target.value)
        if(fieldName === "password") setPassword(e.target.value)
        if(fieldName === "skills") setSkills(e.target.value)
        if(fieldName === "confirmPass") setConfirmpass(e.target.value)
        if(fieldName === "email") setemail(e.target.value)
        if(fieldName === "option") setRole(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault();
        if(name === "" )
        {
            console.log("inside name")
            setError({...error,name:"This field is mandatory."});
            console.log(error)
        }
        if(password === "" || confirmPass === "")
        {
            console.log("inside pass")
            setError({...error,password:"This field is mandatory."});
            console.log(error)
        }
        if(email === "")
        {
            console.log("inside emial")
            setError({...error,email:"This field is mandatory."});
            console.log(error)
        }
        else{
            console.log("sb bhadiya");
        }
        console.log(error)
    }

    return (
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
                        <input className="form-input" onChange={changeHandler} type="text" id="password" placeholder="Enter your Password..." name="passowrd" />
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
                </div>
                <button className ="submit-button" onClick={submitHandler}> Signup</button>
            </form>
            </div>
            <p className="redirection-para">
                Have an account? <Link className="link" to="/login">Login</Link>
            </p>
        </div>
    )
}



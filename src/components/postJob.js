import React,{useEffect , useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { baseUrl } from '../App';
import axios from 'axios';
import Logout from './Logout';

export default function PostJob() {

    const history = useHistory()
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState("")

    useEffect(()=> {
        document.querySelector(".homepageUpperDiv").style.height ="300px";
    },[])

    function changeHandler(e){
        let titleField = document.querySelector("#title");
        let descField = document.querySelector("#description");
        let locationField = document.querySelector("#location");
        setError("");
        const name = e.target.name;
        name === "title" ? setTitle(e.target.value) : name === "description" ? setDesc(e.target.value) : setLocation(e.target.value);
        titleField.style.borderColor="";
        descField.style.borderColor="";
        locationField.style.borderColor="";
    }

    function submitHandler(e){
        e.preventDefault();
        let titleField = document.querySelector("#title");
        let descField = document.querySelector("#description");
        let locationField = document.querySelector("#location");
        document.querySelector("#success-para").innerText="";
        
        if(title === "" && description === "" && location === ""){
            setError("All fields are mandatory");
            titleField.style.borderColor="red";
            descField.style.borderColor="red";
            locationField.style.borderColor="red";
        }
        else if(title === ""){
            setError("Title field is mandatory");
            titleField.style.borderColor="red";
        }
        else if(description === ""){
            setError("Description field is mandatory");
            descField.style.borderColor="red";
        }
        else if(location === ""){
            setError("Location field is mandatory");
            locationField.style.borderColor="red";
        }
        else{
            console.log("aman")

            let data ={
                title,
                description,
                location
            }

            axios.post(baseUrl + "/jobs/",data,{headers:{"Authorization" : localStorage.getItem("userToken")}})
            .then(res => {
                setError("");
                let responseData = res.data;
                console.log(responseData)
                document.querySelector("#success-para").innerText="Job post added Successfully....";
                setTimeout(()=>{
                    history.push("/homescreen");
                },1000)
            })
            .catch(err => {
                console.log(err.response.data)
                if(err.response.data.message !== undefined)
                    setError(err.response.data.message);
                else{
                    for(let key of err.response.data.errors){
                        console.log(key)
                        if(key.title !== undefined){
                            setError(key.title);
                            titleField.style.borderColor="red";
                            break;
                        }
                        else if(key.description !== undefined){
                            setError(key.description);
                            descField.style.borderColor="red";
                            break;
                        }
                        else{
                            setError(key.location);
                            locationField.style.borderColor="red";
                            break;
                        }
                    }
                }
            })
        }
    }

    return (
        <>
            <Logout />
            <div className="redirection-Link">
                <span>🏠 <Link to="/homescreen">Home</Link> &gt; Post a Job</span>
            </div>
            <div className="form post-form">
            <h4 className="form-heading">Post a Job</h4>
            <div className="form-container">
            <form>
                <div className="form-row">
                    <label className="form-label" htmlFor="title">Job title*</label>
                    <input className="form-input" type="text" id="title" name="title" onChange={changeHandler} placeholder="Enter job title..."/>
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="description">Description*</label>                    
                    <textarea className="form-input" type="text" name="description" id="description" onChange={changeHandler} placeholder="Enter job description..." />
                </div>
                <div className="form-row">
                    <label className="form-label" htmlFor="location">Location*</label>
                    <input className="form-input" type="text" id="location" name="location" onChange={changeHandler} placeholder="Enter job title..."/>
                    <p className="error">{error}</p>
                    <p className="success" id="success-para"></p>
                </div>
                <button className ="submit-button" onClick={submitHandler}>Post</button>
            </form>
            </div>
        </div>
        </>
    )
}

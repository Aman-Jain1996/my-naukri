import axios from 'axios';
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { baseUrl } from '../App';
import NoApplicants from './NoApplicants';

export default function Post(props) {

    const [count, setcount] = useState(0);
    const [divData, setdivData] = useState("");
    const [posts,] = useState(props.posts);
    const [pageNumber, setpageNumber] = useState(0);
    let postsPerPage =8;
    let pageVisited = pageNumber * postsPerPage;
    
    function fetchJobPosts(){
        return posts.slice(pageVisited,pageVisited+postsPerPage).map(item => {
             return (<div key={item.id} className="jobPosts-div">
                <div>
                    <p style={{display:"none"}} >{item.id}</p>
                    <p className="postTitle">{item.title}</p>
                    <p className="postDesc" >{item.description[0].toUpperCase()    + item.description.slice(1,) }</p>
                </div>
                 <div className="location-Div">
                     <p className="postLocation" > <i className="fa fa-map-marker" style={{color:"#2b8cd6",paddingRight:"5px"}}></i>{item.location}</p>
                     <button className="view-Applications" onClick={(e)=>clickHandler(e,item)}>view Applications</button>
                 </div>
             </div>)
         })
     }

    function fetchApplications(item){
        return (<div className="applicationDetails-container">
            {item.map(data => {
            return (<div className="applicationDetails" key={data.id}>
                        <div className="appDetails-header">
                            <div className="appName">{data.name[0].toUpperCase()}</div>
                            <div className="appDetails-headerInfo">
                                <p className="header-name" >{data.name}</p>
                                <p>{data.email}</p>
                            </div>

                        </div>
                        <div className ="appDetails-body" >
                            <p className="header-name">Skills</p>
                            <p>{data.skills}</p>
                        </div>
                    </div>)
        })}
        </div>)
    }


    function clickHandler(e,item){
        document.querySelector(".posts-Div").style.opacity = 0.5;
        document.querySelector(".posts-Div").style.pointerEvents = "none";
        document.querySelector(".applications-div").style.display ="block";

        axios.get(baseUrl+"/recruiters/jobs/"+item.id+"/candidates",{headers:{"Authorization":localStorage.getItem("userToken")}})
        .then(res => {
            if(res.data.message !== undefined){
                setcount(0);
                setdivData(<NoApplicants />);
            }
            else{
                setcount(res.data.data.length);
                setdivData(fetchApplications(res.data.data))
            }
        })
        .catch(err => console.log(err.response))
    }

    function closeHandler(){
        document.querySelector(".applications-div").style.display ="none";
        document.querySelector(".posts-Div").style.opacity = 1;
        document.querySelector(".posts-Div").style.pointerEvents = "";
    }

    function pageChange({selected}){
        setpageNumber(selected)
    }

    return (
        <>
        <div className="posts-Div">
            {fetchJobPosts()}
        </div>
        <ReactPaginate 
            pageCount= {Math.ceil(posts.length / postsPerPage)}
            previousLabel={"<"}
            nextLabel = {"> "}
            onPageChange ={pageChange}
            containerClassName ={"paginateClass"}
            previousLinkClassName ={"previousLink"}
            nextLinkClassName ={"nextLink"}
            activeLinkClassName = {"activeLink"}

        />
        <div className="applications-div">
            <div className="applicationDiv-header">
                <span className="header">
                    Applications for this job
                </span>
                <span className="X" onClick={closeHandler} >
                    X
                </span>
            </div>
            <hr style={{color:"#557DA526",opacity:"0.8"}}/>
            <p style={{color: "#303F60",margin:"1rem 0",fontSize:"0.8rem"}}> 
                { count === 0 ? `0 applications` : `Total ${count} applications`} 
            </p>
            <div className="application-container">
                {divData}
            </div>
        </div>
    </>
    )
}

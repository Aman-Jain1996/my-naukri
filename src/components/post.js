import axios from 'axios';
import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { baseUrl } from '../App';

export default function Post(props) {

    const [count, setcount] = useState(0)
    const [posts,setPosts] = useState(props.posts);
    const [pageNumber, setpageNumber] = useState(0);
    let postsPerPage =8;
    let pageVisited = pageNumber * postsPerPage;
    
    function fetchJobPosts(){
        return posts.slice(pageVisited,pageVisited+postsPerPage).map(item => {
             return (<div key={item.id} className="jobPosts-div">
                 <p style={{display:"none"}} >{item.id}</p>
                 <p className="postTitle">{item.title}</p>
                 <p className="postDesc" >{item.description[0].toUpperCase() + item.description.slice(1,) }</p>
                 <div className="location-Div">
                     <p className="postLocation" > <i className="fa fa-map-marker" style={{color:"#2b8cd6",paddingRight:"5px"}}></i>{item.location}</p>
                     <button className="view-Applications" onClick={(e)=>clickHandler(e,item)}>view Applications</button>
                 </div>
             </div>)
         })
     }


    function clickHandler(e,item){
        document.querySelector(".posts-Div").style.opacity = 0.5;
        document.querySelector(".posts-Div").style.pointerEvents = "none";
        document.querySelector(".applications-div").style.display ="block";

        axios.get(baseUrl+"/recruiters/jobs/"+item.id+"/candidates",{headers:{"Authorization":localStorage.getItem("userToken")}})
        .then(res => {
            console.log(res.data)
            if(res.data.message !== undefined){
                count=0;
                let element = <div className="noApplicants">Aman Jain</div>
                document.querySelector(".application-container").append(element);
            }
            else{
                setcount(()=>res.data.data.length);
                console.log(res.data.data.length)
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
            <p style={{color: "#303F60",margin:"1rem 0",fontSize:"0.8rem"}}>{`Total ${count && 0} applications`}</p>
            <div className="application-container">
                
            </div>
        </div>
    </>
    )
}

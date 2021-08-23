import axios from 'axios';
import {React,useEffect ,useState} from 'react'
import Logout from './Logout';
import NoPost from './NoPost';
import { baseUrl } from '../App';
import Post from './post';

export default function HomeScreen(props) {

    const [resultData, setresultData] = useState([]);

    useEffect(() => {
        document.querySelector(".homepageUpperDiv").style.height ="210px";
        axios.get(baseUrl + "/recruiters/jobs",{headers:{"Authorization":localStorage.getItem("userToken")}})
        .then(res =>{
            let responseData = res.data;
            setresultData(Array.from(responseData.data.data))
        })
        .catch(err => {
            console.log(err.response)
        })
    },[])

    return (
        <>
            <Logout />
            <div className="redirection-Link">
                <span>🏠 Home</span>
                Jobs posted by you
            </div>
            {!resultData.length ? <NoPost /> : <Post posts={resultData} />}
        </>)
}

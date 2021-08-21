import React from 'react'

// ▲ 

export default function HomeScreen() {
    return (
        <>
            <div className="jobPost-link">
                Post a Job
            </div>
            <div className="logout-div">
                <span className="nameInitial">{localStorage.getItem("userName").toUpperCase()[0]}</span>
            </div>
            <span className="arrow-span" >▼</span>
    
        </>
        

    )
}

import React from 'react'
import './css/Design.css'
const Design=props=>{
    console.log(props);
    return(
        <div className="card">
        <div className="pic"></div>
        <h1 className="name">{props.name}</h1>
        <p className="title">{props.title}</p>
        <div className="cont">
            <p className="desText">{props.description}</p>
        </div>
        </div>
    )
}
export default Design 
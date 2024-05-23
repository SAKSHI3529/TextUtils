// import { useState } from "react"
import React, {useState}from 'react'

const TextForm = (props) => {

  const handleUpChange = () => {
    console.log("convert to upper");

    let newText = text.toUpperCase();
    setText(newText);
  }

  const handleLowerChange = () => {
    console.log("convert to Lower");

    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
    // to change the value will be added in text box
  }


  const[text, setText] = useState("");

  // setText("newText");

  return (
  <>
  <div className="container mb-3 ">
   

    <h1>{props.title}</h1>
    {/* <label htmlFor="box" className="form-label">Example textarea</label> */}
    <div>
    <textarea className="form-control" id="box" rows="10" value={text} onChange={handleOnChange}></textarea>
    </div>
    <button className='btn btn-primary m-3' onClick={handleUpChange}>Convert to Upper case</button>
    <button className='btn btn-primary m-3' onClick={handleLowerChange}>Convert to Lower case</button>
    
  </div>

  <div className="conatiner">
    <h2>Text summary</h2>
    <p>{text.split(" ").length} Words and {text.length} characters</p>
    <h2>Preview</h2>
    <p>{text}</p>
  </div>
  </>
  
  )
}

export default TextForm
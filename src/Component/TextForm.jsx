// import { useState } from "react"
import React, {useState}from 'react'
import TextToSpeech from './TextToSpeech';

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

  const handleinverseclick = () => {
    console.log("inverse click is triggered");
    let newtext = "";
    for (let i = text.length - 1; i >= 0; i--) {
      newtext += text[i];
    }
    setText(newtext);
  };

  const handleSpeak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  // It is targetted by the button 'speak':
  
  

  const handleClear = () => {
    let clear = "";
    setText(clear);
  }

  const[paragraphCount, setparagraphCount] = useState("");

  const countParagraph = () => {
    console.log("paracount");
    const paragraphs = text.split("\n");
    setparagraphCount(paragraphs.length);
  }

  const handleOnChange = (event) =>{
    console.log("on change");
    setText(event.target.value);
    // to change the value will be added in text box
  }

  const [sentenceCount, setSentenceCount] = useState(0);

  const countSentences = (text) => {
    const sentences = text.split("");
    setSentenceCount(sentences.length);
  };


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
    <button className='btn btn-primary m-3' onClick={countParagraph}>Count Paragraphs <span class="badge badge-light bg-white text-dark" id="sentence_count" >{paragraphCount}</span> </button>
    <button className='btn btn-primary m-3' onClick={countSentences}>Count Sentances
    <span class="badge badge-light bg-white text-dark" id="sentence_count" >{sentenceCount}</span>
    </button>

    <button className='btn btn-primary m-3' onClick={handleClear}>Clear Text</button>
    <button className='btn btn-primary m-3' onClick={handleinverseclick}>Inverse Text</button>
    {/* <button type="submit" onClick={handleSpeak} className="btn btn-warning mx-2 my-2">Speak</button> */}

    <TextToSpeech text={text} />
  </div>

  <div className="conatiner">
    <h2>Text summary</h2>
    <p>{text.split(" ").length} Words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes to read </p>
    
    <h2>Preview</h2>
    <p>{text}</p>

    

  </div>
  </>
  
  )
}

export default TextForm
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = () => {
    setText("");
    props.showAlert("Cleared All Text", "danger")
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div className="container">
      <div className="container" style={{color: props.mode==='light'?'#1d2024':'white'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#272b30':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>
          Clear All
        </button>
      </div>
      <div className="container my-2" style={{color: props.mode==='light'?'#1d2024':'white'}}>
        <h1>Your text Summary</h1>
        <p>
          {text.split(" ").length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter text to preview"}</p>
      </div>
    </div>
  );
}

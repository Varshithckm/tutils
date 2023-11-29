import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    //console.log("Upper case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase","success");
  };
  const handleLoClick = () => {
    //console.log("Upper case was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase","success");
  };
  const handleClear = () => {
    //console.log("Upper case was clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared","success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const handleCopy=()=>{
    var text= document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Text copied","success");
  }
  const handleExtraSpaces=()=>{
    let newtext=text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.showAlert("Extra spaces removed","success");
  }
  
  
  return (
    <>
    <div className="container"  style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
          style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2 " onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button  disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
        Convert to lowercase
      </button>
      <button  disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleClear}>
      
        Clear text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleCopy}>
        Copy text
      </button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleExtraSpaces}>
        Remove extra spaces
      </button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 *text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in the text box to preview it here"}</p>
    </div>
    </>
  );
}

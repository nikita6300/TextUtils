import React, { useState } from "react";

function Textform(props) {
  const handleUpClick=()=>{
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success");
  }
  const handleLoClick=()=>{
    // console.log("Uppercase was clicked "+ text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success")
  } 
  const handleClearClick=()=>{
    // console.log("Uppercase was clicked "+ text);
    let newText = '';
    setText(newText)
    props.showAlert("cleared","success")
  } 
  const togggleBold=()=>{
    // console.log("Uppercase was clicked "+ text);
    setIsBold(!isBold);
    props.showAlert("bold ho gya","success")
    
  } 
  const handleCopy=()=>{
    var text=document.getElementById("mybox")
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("copied","success")
    
  }
  

  const handleOnChange=(event)=>{
    console.log("on change");
    setText(event.target.value);
  }
   



  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  // setText=("new text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1 container ='my-1'>
        {props.heading}
      </h1>
      <div className="mb-3">
        {/* <label for="mybox" class="form-label">
            Example textarea
          </label> */}
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8" style={{ fontWeight: isBold ? "bold" : "normal" ,backgroundColor: props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'#2c456a':'black'}}></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>convert to uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleLoClick}>convert to lowercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleClearClick}>convert to lowercase</button>
    
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={togggleBold}>bold kr do</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleCopy}  >copy</button>
    
    </div>
    
    <div disabled={text.length===0} className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>
        your text summary
      </h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charaaters</p>
      <p>{0.08 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
      <h2>preview</h2>
      <p>{text.length>0?text:"nothing to preview"}</p>

    </div>
    </>
  );
}

export default Textform;

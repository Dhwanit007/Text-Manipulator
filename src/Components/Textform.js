import React , {useState} from "react";

const Textform = (props) => {
  const handleUpClick = () => {
    // console.log("Upper case was clicked")
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert ("Converted to Upper Case" , "success");
  }
  const handleDownClick = () => {
    // console.log("Lower case was clicked")
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert ("Converted to Lower Case" , "success");
  }
  const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value)
  }
  const handleOnClear = (event) => {
    // console.log("Clear was clicked!")
    let newText = ("");
    setText(newText);
    props.showAlert ("Textbox cleared!" , "success");
  }
  const handleCopy = ()=>{
    navigator.clipboard.writeText(text);
    props.showAlert ("Copied to clipboard" , "success");
  }
  const RemoveExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert ("Extra spaces removed successfully!" , "success");
  }
  const [text,setText] = useState("");
return (
  <>
    <div className="container my-3">
      <div className="mb-3">
        <h1 style={{color:props.mode === 'dark'?'white':'black'}}>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'black'}} id="exampleFormControlTextarea1" rows="8"></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to Upper Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleDownClick}>Convert to Lower Case</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleOnClear}>Clear Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters </p>
      <p> {0.008 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes to read </p>
      <h2>Preview</h2>
      <p><b>{text.length>0?text:"Enter something in the above box to preview it here!"}</b></p>
    </div>
    </>
  );
};

export default Textform;
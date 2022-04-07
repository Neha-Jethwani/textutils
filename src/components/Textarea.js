import React, {useState} from 'react'

export default function Textarea(props) {

    const handleUpcase = ()=>{

        console.log("uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");

    }
    const handleLowercase = ()=>{

        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
    }

    const handleOnchange = (event)=>{

        console.log("on chnage");
        setText(event.target.value);

    }

    const handleClear = ()=>{
        /*let newText = text
        console.log(text);*/
        setText("");

        
    }

    /*const handleUndo = ()=>{
        let newText = text
        setText(newText);
        console.log("undo");
    }*/


    const handleCopy = ()=>{
        /* let newText = document.getElementById("exampleFormControlTextarea1");
        newText.select(); */
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard","success");
       // document.getSelection().removeAllRanges(); // deselect text

    }
    
    const handleRemovespace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState("")
    


  return (
      <>
  <div className="container mb-3" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
     <textarea value={text} style={{backgroundColor : props.mode === 'dark'?'#929ab6':'white',color:props.mode ==='dark'?'white':'black'}} className="form-control" onChange={handleOnchange} id="exampleFormControlTextarea1" rows="8" />
    
    <button disabled={text.length===0}  className="btn btn-primary my-3 mx-2" onClick={handleUpcase}>
        Convert To Uppercase
    </button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleLowercase}>
         Convert  To Lowercase
    </button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleClear}>
        Clear
    </button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleCopy}>
        Copy Text
    </button>
    <button disabled={text.length===0} className="btn btn-primary my-3 mx-2" onClick={handleRemovespace}>
       Remove extra Space
    </button>
    {/*<button className="btn btn-primary my-3 mx-2" onClick={handleUndo}>
       Undo
  </button>*/}
  </div>

  <div className="container mb-3" style={{color:props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summery</h2>
     
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} charater</p>
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>

      <h2>Preview</h2>
      <p>{text}</p>
  </div>
  </>
  )
}

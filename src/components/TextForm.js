import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    function handleCopy() {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    return (
        <>
            <div className="container">
                <div className="mb-3 " style={{color: props.mode==="light"?"black":"white"}}>
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==="light"?"white":"#232D3F", color: props.mode==="light"?"black":"white"}}></textarea>
                </div>
                <button className="btn btn-primary mx-2" onClick={handleUpClick} > Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick} > Convert to Lowercase</button>
                <button className="btn btn-primary" onClick={handleCopy} > Copy Text</button>
            </div>
            <div className="container my-3" style={{color: props.mode==="light"?"black":"white"}}>
                <h1>Text Summary</h1>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words {text.length} characters</p>
                <h2>Preview</h2>
                <p>{text.length>0? text:"Enter some text to get a preview"}</p>
            </div>
        </>
    )
}

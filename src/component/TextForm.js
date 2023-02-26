import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        // setText("you have click on handleUpclick")
        props.showAlert(" converted into Uppercase!", "success");
        document.title = 'TextUtils - Uppercase';

    }
    const handleLoClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("conveted into lowercase!", "success");
        document.title = 'TextUtils - lowercase';
    }
    const handleClearClick = () => {
        // console.log("Uppercase was clicked" + text);
        let newText = '';
        setText(newText)
        props.showAlert("clear the text!", "success");
        document.title = 'TextUtils - clear';
    }
    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
    }
    const handleCopy = () => {
        var text = document.getElementById("mybox");
        text.select();
        navigator.clipbord.writetext(text);
        document.getSelection().removeAllRanges();
        props.showAlert("copy to Clipboard!", "success");
        // document.title = 'TextUtils - copy ';
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("remove extra spaces!", "success");
        document.title = 'TextUtils - remove extra spaces!';
    }

    const [text, setText] = useState('');
    // setText('I m good');

    // console.log(useState('Enter text here5'))
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ background: props.mode === 'light' ? 'white' : 'gray', color: props.mode === 'dark' ? 'white' : 'black' }} id="mybox" rows="9" columns="22"></textarea>
                </div>
                <button className="btn btn-primary mx-6" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-primary mx-6" onClick={handleLoClick}>convert to Lowercase</button>
                <button className="btn btn-primary mx-6" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-6" onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-6" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

            </div>
            <div className="container my-1" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your text summary</h1>
                <p>{text.split(" ").length-1}word and {text.length}characters </p>
                <p>{0.008 * text.split(" ").length}word and {text.length} Minutes read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
} 

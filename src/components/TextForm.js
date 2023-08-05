import { React, useState } from "react";

const TextForm = (props) => {
  const handleUpClick = () => {
    let temp = text.toUpperCase();
    setText(temp);
  };

//   const evaluate_Words = () =>{
//     if(text.length() === 0){
//         return 0;
//     }
//     return 
//   };

  const handleLowClick = () => {
    let temp = text.toLowerCase();
    setText(temp);
  };
  const handleClearClick = () => {
    setText("");
    setVowels(0);
  };
  const handleOnChange = (event) => {
    // console.log(target.value);
    let str = (event.target.value+"");
    let character = str.charAt(str.length -1);
    // console.log(character);
    if(character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'
        || character === 'A' || character === 'E' || character === 'I' || character === 'O' || character === 'U'){
          let count = vowels;
          setVowels(count+1);
    }
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const [vowels, setVowels] = useState(0);
  return (
    <div>
      <div className="container my-3">
        <h3>{props.heading}</h3>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button
          onClick={handleUpClick}
          type="button"
          className="btn btn-primary"
        >
          Convert to UpperCase
        </button>
        <button
          onClick={handleLowClick}
          type="button"
          className="btn btn-primary ms-3"
        >
          Convert to LowerCase
        </button>
        <button
          onClick={handleClearClick} 
          type="button"
          className="btn btn-primary ms-3"
        >
          Clear
        </button>
      </div>
      <div className="container">
        <h3>Your text summary</h3>
        <div>{text.split(" ").length} words and {text.length} characters</div>
        <div>{0.008* text.split(" ").length} minutes read</div>
        <div>Number of Vowels: {vowels}</div>
        <h3>Preview</h3>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default TextForm;

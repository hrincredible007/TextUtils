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
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text here");
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
      </div>
      <div className="container">
        <h3>Your text summary</h3>
        <div>{text.split(" ").length} words and {text.length} characters</div>

        <h3>Preview</h3>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default TextForm;

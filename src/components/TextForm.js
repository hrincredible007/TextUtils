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
    setConstants(0);
    setSpaces(0);

    setVowels(0);
  };
  const count_Vowels = () => {
    let str = text;
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      let character = str.charAt(i);
      if (
        character === "a" ||
        character === "e" ||
        character === "i" ||
        character === "o" ||
        character === "u" ||
        character === "A" ||
        character === "E" ||
        character === "I" ||
        character === "O" ||
        character === "U"
      ) {
        count += 1;
        setVowels(count);
      }
    }
  };

  const count_Constants = () => {
    let str = text;
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      let character = str.charAt(i);
      if (
        character !== "a" &&
        character !== "e" &&
        character !== "i" &&
        character !== "o" &&
        character !== "u" &&
        character !== "A" &&
        character !== "E" &&
        character !== "I" &&
        character !== "O" &&
        character !== "U" &&
        character !== " "
      ) {
        count += 1;
        setConstants(count);
      }
    }
  };
  const count_Spaces = () => {
    let str = text;
    let count = 0;
    for (let i = 0; i < str.length; i += 1) {
      let character = str.charAt(i);
      if (character === " ") {
        count += 1;
        setSpaces(count);
      }
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  const [vowels, setVowels] = useState(0);
  const [constants, setConstants] = useState(0);
  const [spaces, setSpaces] = useState(0);
  return (
    <div>
      <div className="container my-3">
        <h3 style={{ color: props.mode === "dark" ? "white" : "dark" }}>
          {props.heading}
        </h3>
        <div className="my-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              color: props.mode === "dark" ? "white" : "dark",
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
            }}
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
        <button
          onClick={count_Vowels}
          type="button"
          className="btn btn-primary ms-3"
        >
          Count Vowels
        </button>
        <button
          onClick={count_Constants}
          type="button"
          className="btn btn-primary ms-3"
        >
          Count Constants
        </button>
        <button
          onClick={count_Spaces}
          type="button"
          className="btn btn-primary ms-3"
        >
          Count Spaces
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "dark" }}
      >
        <h3>Your text summary</h3>
        <div>
          {text.split(" ").length} words and {text.length} characters
        </div>
        <div>{0.008 * text.split(" ").length} minutes read</div>
        <div>Number of Vowels: {vowels}</div>
        <div>Number of Constants: {constants}</div>
        <div>Number of White Spaces: {spaces}</div>
        <h3 className="my-2">Preview</h3>
        <div>{text.length === 0 ? 'Enter something in the textbox to preview it here.': text}</div>
      </div>
    </div>
  );
};

export default TextForm;

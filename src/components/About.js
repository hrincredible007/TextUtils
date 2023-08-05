import { React, useState } from "react";

const About = () => {
  const [mode, setMode] = useState({
    color: "black",
    backgroundColor: "white",
    // maxWidth: "80%", 
  });

  const [button, setButton] = useState("Enable Dark Mode");
  const [buttonText, setButtonText] = useState("btn btn-dark");


  const changeMode = () =>{
    let original = mode.color;
    console.log(original);
    if(original === 'black'){
        setMode({
            color: 'white',
            backgroundColor: "black",
            
        });
        setButton("Enable Light Mode");
        setButtonText("btn btn-light");
    }
    else{
        setMode({
            color: 'black',
            backgroundColor: "white",
            // maxWidth: "80%",
        });
        setButton("Enable Dark Mode");
        setButtonText("btn btn-dark");
    }
  }

  return (
    <>
      <div className="container mt-3" style={mode}>
        <div className="card bg-light mb-3" style={mode}>
          {/* <div className="card-header">About Us</div> */}
          <div className="card-body" style={mode}>
            <h5 className="card-title pb-2" style={mode}>About Us</h5>
            <p className="card-text" style={mode}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam doloribus excepturi neque? Doloremque
              cum rem aspernatur, eveniet saepe, dolor consectetur corrupti et
              dolorem deleniti modi sapiente minima necessitatibus labore ad
              provident delectus? Some quick example text to build on the card
              title and make up the bulk of the card's content. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Quibusdam doloribus
              excepturi neque? Doloremque cum rem aspernatur, eveniet saepe,
              dolor consectetur corrupti et dolorem deleniti modi sapiente
              minima necessitatibus labore ad provident delectus? Some quick
              example text to build on the card title and make up the bulk of
              the card's content. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quibusdam doloribus excepturi neque? Doloremque
              cum rem aspernatur, eveniet saepe, dolor consectetur corrupti et
              dolorem deleniti modi sapiente minima necessitatibus labore ad
              provident delectus?
            </p>
          </div>
        </div>
      </div>
      <div className="container">
      <button type="button" class={buttonText} onClick={changeMode}>{button}</button>
      </div>
    </>
  );
};

export default About;

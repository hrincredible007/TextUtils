import React, { useState } from "react";
import "./App.css";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
// import Proptypes from 'prop-types'
function App() {

  const changeMode = () =>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      // document.body.style.backgroundColor = '#6c757d';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  

  const [mode, setMode] = useState('light');
  // console.log(mode);
  return (
    <div>
      <NavBar title = "TextUtils"  mode = {mode} change = {changeMode}/>
      <TextForm heading = "Enter the text to analyze below" mode = {mode}></TextForm>
      
      {/* <About></About> */}
    </div>
  );
}

// NavBar.defaultProps = {
//   title: "Hero"
// }

// NavBar.Proptypes = {
//   title: Proptypes.string
// }

export default App;

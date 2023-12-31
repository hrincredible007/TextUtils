import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import {
  BrowserRouter as BRouter,
  Route,
  Routes,
} from "react-router-dom";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import Proptypes from 'prop-types'
function App() {
  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#343a40";
      // document.body.style.backgroundColor = "black";
      updateAlert("Dark Mode is activated", "success");
      // document.body.style.backgroundColor = '#6c757d';
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      updateAlert("Light Mode is activated", "success");
    }
  };

  const updateAlert = (message, thing) => {
    setAlert({
      msg: message,
      thing: thing,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  // console.log(mode);
  return (
    <div>
    <BRouter>
      <NavBar title="TextUtils" mode={mode} change={changeMode} />
      <Alert alert={alert}></Alert>
      <Routes>
        <Route exact path="/about" element={<About/>}></Route>
        <Route exact path="/" element = {
          <TextForm
            heading="Enter the text to analyze below"
            mode={mode}
            updateAlert={updateAlert}
          ></TextForm>}>
        </Route>
        </Routes>
      </BRouter>
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

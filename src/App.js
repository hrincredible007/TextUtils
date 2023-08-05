import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
// import TextForm from "./components/TextForm";
// import Proptypes from 'prop-types'
function App() {
  return (
    <div>
      <NavBar title = "TextUtils"/>
      {/* <TextForm heading = "Enter the text to analyze below"></TextForm> */}
      <About></About>
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

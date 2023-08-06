import React from "react";

const NavBar = (props) => {
  // console.log(props.mode)
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.title}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark': 'light'}`}>
                <input className="mr-40 form-check-input" type="checkbox" onClick={props.change} id="flexSwitchCheckDefault"/>
                <label className={`form-check-label`} htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
              </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;

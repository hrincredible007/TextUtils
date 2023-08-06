import React from "react";

const Alert = (props) => {

  const Capitalize = (str) =>{
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1); 
  }


  return (

    props.alert && <div>
      <div className="alert alert-success" role="alert">
        <strong>{Capitalize(props.alert.thing)} </strong>{props.alert.msg}
      </div>
    </div>
  );
};

export default Alert;

import React from "react";

const TextForm = (props) => {
  return (
    <div>
      <div className="container my-3">
        <h3 class="y-3">{props.heading}</h3>
        <div className="my-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
      <button type="button" class="btn btn-primary">Convert to UpperCase</button>
</div>
    </div>
  );
};

export default TextForm;

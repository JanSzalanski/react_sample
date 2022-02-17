import React from "react";
import "./StronaC.css";

const StronaC = (props) => {
  return (
    <div className="stronaC">
      <h1>Strona C</h1>
      {props.children}
    </div>
  );
};

export default StronaC;

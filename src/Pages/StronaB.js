import React from "react";
import "./StronaB.css";

const StronaB = (props) => {
  return (
    <div className="stronaB">
      <h1>Strona B</h1>
      {props.children}
    </div>
  );
};

export default StronaB;

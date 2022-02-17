import React from "react";
import "./StronaA.css";

const StronaA = (props) => {
  return (
    <div className="stronaA">
      <h1>Strona A</h1>
      {props.children}
    </div>
  );
};

export default StronaA;

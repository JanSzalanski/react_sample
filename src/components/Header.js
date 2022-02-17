import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header>
      <div className="header">{props.children}</div>
    </header>
  );
};

export default Header;

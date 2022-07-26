import React from "react";
import { Link } from "react-router-dom";

const Logo = (props) => {
  return (
    <div className="sub-logo">
      <Link to="/">
        <img src={props.src} alt="planet impact logo" />
      </Link>
    </div>
  );
};

export default Logo;

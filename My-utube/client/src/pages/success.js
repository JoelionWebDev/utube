import React from "react";
import { NavLink } from "react-router-dom";
import "./success.css";

const success = () => {
  return (
    <div className="success">
      {" "}
      <h2>Email submited succesfully</h2>
      <h3>click go back home to go back to where you subscribe</h3>
      <h3 className="navl">
        <NavLink to={"/"}>Go Back Home</NavLink>
      </h3>
    </div>
  );
};

export default success;

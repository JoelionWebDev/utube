import React from "react";
import { NavLink } from "react-router-dom";
import "./success.css";

const success = () => {
  return (
    <div className="success">
      {" "}
      <h2>
        Email submited succesfully <i class="fa-solid fa-thumbs-up"></i>
      </h2>
      <h4>click "Go back home" to go back to the home page</h4>
      <h3 className="navl">
        <NavLink to={"/"}>Go Back Home</NavLink>
      </h3>
    </div>
  );
};

export default success;

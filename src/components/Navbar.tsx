import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to={"/List"} className="link">
          <div className="projectname">Haila</div>
        </Link>
      </div>
    </>
  );
};

export default Navbar;

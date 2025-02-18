import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="background">
        <div className="homepage">
          <span>
            Study with ease
            <br />
            with a new set of apps designed for you!
          </span>
        </div>
        <Link to="/List" className="btn-enter">
          <span>Start</span>
        </Link>
      </div>
    </>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";
import "./pagesstyles.css";

function home() {
  return (
    <div className="page_container">
      <div className="context">
        <div className="hero-section">
          <img src="../hero.png" className="hero-img" alt="ml recruiters img" />
          <h1 className="txtr">ML Recruiters</h1>
          <p className="txtr hero-detail">
            Connect you'r self with tons of others croud of professionals, with
            the help of ML Recreuiter's we will help you to fine and to be the
            best on the market.
          </p>
        </div>
        <div className="separator"></div>
        <div className="hero-action-section">
          <div className="title">
            <h3>Login or Signup</h3>
            <p>To ML Recruiters</p>
          </div>
          <Link to="/signup" className="login btnc btn-enl">
            Signup
          </Link>
          <div className="or-splitter">
            <span></span>
            <p>or</p>
            <span></span>
          </div>
          <Link to="/login" className="signup btnc btn-enl">
            Login
          </Link>
        </div>
      </div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default home;

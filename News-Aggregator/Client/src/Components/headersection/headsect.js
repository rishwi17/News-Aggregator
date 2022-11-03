import React from "react";
import "./headsect.css";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";

const Headsect = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="outee ">
        <nav>
          <img className="img-nav" src={logo} alt="" width="50" height="50" />
          <div>
          <button
              className="buttonn btn btn-outline-white m-2 my-sm-0"
              type="submit"
              onClick={() => {
                navigate("/ourteam");
              }}
            >
              TEAM
            </button>
            <button
              className="buttonn btn btn-outline-white m-2 my-sm-0"
              type="submit"
              onClick={() => {
                navigate("/login");
              }}
            >
              LOGIN
            </button>
            <button
              className="btn btn-outline-white m-2 my-sm-0 buttonn"
              type="submit"
              onClick={() => {
                navigate("/signup");
              }}
            >
              REGISTER
            </button>
          </div>
        </nav>
        <header className="header container">
          <div className="left-content">
            <p className="stay-home">NEWS AGGREGATOR!!</p>
            <h1>be a part of us</h1>
            <p></p>
            <p className="para">
              That's what we need right now. Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Aliquam, corporis.
            </p>
            <button
              onClick={() => {
                navigate("/signup");
              }}
            >
              JOIN US
            </button>
          </div>
        </header>
      </div>
    </>
  );
};

export default Headsect;

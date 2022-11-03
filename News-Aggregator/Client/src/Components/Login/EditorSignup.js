import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./editorlogin.css";

import axios from "axios";

let style2 = { marginRight: "30px" };

const EditorSignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  console.log("this is the editor signup form");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        name: name,
        email: email,
        password: password,
      });

      const response = await axios.post(
        "http://localhost:8000/editor/signup",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const message = response.data;
      console.log(message);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="outer">
        <div className="center register">
          <h1>Sign-Up as a Editor</h1>

          <div className="pageSwitcher">
            <NavLink
              to="/signup"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem reader"
            >
              Reader
            </NavLink>
            <NavLink
              exact
              to="/editor/signup"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem "
              style={{ border: "2.5px solid #FF4411" }}
            >
              Editor
            </NavLink>
          </div>

          <form id="signupForm" onSubmit={onSubmit}>
            <div className="txt_field" style={style2}>
              <input
                type="text"
                id="signup-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <span></span>
              <label>Name</label>
            </div>
            <div className="txt_field">
              <input
                type="email"
                id="signup-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <span></span>
              <label>Email</label>
            </div>
            <div className="txt_field">
              <input
                type="password"
                id="signup-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <button
              type="submit"
              className="click-button registerbutton"
              id="register-button"
            >
              Register as Editor
            </button>
            <div className="signup_link">
              Already a member?{" "}
              <Link className="nav-link" to={"/editor/login"}>
                Sign In
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditorSignup;

import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate, NavLink } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = JSON.stringify({
        email: email,
        password: password,
      });

      const response = await axios.post(
        "http://localhost:8000/user/login",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      const token = response.data.token;

      window.localStorage.setItem("token", token);

      navigate("/newsfeed", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="outer">
        {/* <div className="img-wave"><img src={image} alt=""/></div> */}
        <div className="center">
          <h1>Login</h1>
          <div className="pageSwitcher">
            <NavLink
              to="/login"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem reader"
              style={{ border: "2.5px solid #FF4411" }}
            >
              Reader
            </NavLink>
            <NavLink
              exact
              to="/editor/login"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem "
            >
              Editor
            </NavLink>
          </div>

          <form id="login-form" onSubmit={onSubmit}>
            <div className="txt_field">
              <input
                type="text"
                id="login-email"
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
                id="login-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span></span>
              <label>Password</label>
            </div>
            <div className="pass">Forgot Password?</div>
            <button
              type="submit"
              id="login-button"
              className="click-button"
              value="Login"
            >
              Login
            </button>
            <div className="signup_link">
              Not a member?{" "}
              <Link className="nav-link" to={"/signup"}>
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

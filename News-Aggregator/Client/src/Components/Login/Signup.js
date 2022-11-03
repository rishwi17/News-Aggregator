import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import "./login.css";

import axios from "axios";

let style2 = { marginRight: "30px" };

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  const [userinfo, setUserInfo] = useState({
    languages: [],
    // response: [],
  });
  console.log(userinfo);
  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = userinfo;

    // Case 1 : The user checks the box
    if (checked) {
      setUserInfo({
        languages: [...languages, value],
        // response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setUserInfo({
        languages: languages.filter((e) => e !== value),
        // response: languages.filter((e) => e !== value),
      });
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", image);

      const upload = await axios.post("http://localhost:8000/upload", formData);

      const data = {
        name,
        email,
        password,
        image: upload.data.filename,
        categories: userinfo.languages,
      };

      console.log(data);

      const response = await axios.post(
        "http://localhost:8000/user/signup",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
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
          <h1>Sign-Up</h1>

          <div className="pageSwitcher">
            <NavLink
              to="/user/signup"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem reader"
              style={{ border: "2.5px solid #FF4411" }}
            >
              Reader
            </NavLink>
            <NavLink
              exact
              to="/editor/signup"
              activeClassName="pageSwitcherItem-active"
              className="pageSwitcherItem "
            >
              Editor
            </NavLink>
          </div>

          <form
            id="signupForm"
            onSubmit={onSubmit}
            encType="multipart/form-data"
          >
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
            <div className="txt_field" style={style2}>
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
            <div className="txt_field">
              <input
                type="file"
                onChange={(e) => {
                  setImage(e.target.files[0]);
                }}
                name="picture"
                accept="Image/*"
              />
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="general"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    General
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="sports"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Sports
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="business"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Business
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="entertainment"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    entertainment
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="health"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Health
                  </label>
                </div>
                <div className="form-check m-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="languages"
                    value="technology"
                    id="flexCheckDefault"
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    technology
                  </label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button
                  type="submit"
                  className="click-button registerbutton"
                  id="register-button"
                >
                  Register
                </button>
                <div className="signup_link">
                  Already a member?{" "}
                  <Link className="nav-link" to={"/login"}>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;

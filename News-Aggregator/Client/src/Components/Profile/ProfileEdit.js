import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./ProfileEdit.css";
import Navbar from "../Navbar/Navbar";
import { useNavigate, useParams } from "react-router-dom";

export const ProfileEdit = (props) => {
  const Params = useParams();
  const Navigate = useNavigate();

  const [newName, setNewName] = useState("");
  const [user, setUser] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");
  const [newProfile, setNewProfile] = useState("");

  function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.match(mailformat))
{
alert("Valid email address!");
//document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
//document.form1.text1.focus();
return false;
}
}

  useEffect(() => {
    axios
      .get(`http://localhost:8000/user`, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUser(response.data);
      });
  }, []);
  const [userinfo, setUserInfo] = useState({
    languages: [],
    // response: [],
  });

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

  const updateList = async () => {
    const formData = new FormData();

    const data = {};

    const newForm = new FormData();

    if (profilePhoto !== "") newForm.append("picture", profilePhoto);
    if (newName !== "") newForm.append("name", newName);
    if (ValidateEmail(newEmail))
      if (newEmail !== "") newForm.append("email", newEmail);
    
      if (userinfo.languages.length !== 0)
      newForm.append("categories", userinfo.languages);

    const update = await axios.patch(`http://localhost:8000/user`, newForm, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + window.localStorage.getItem("token"),
      },
    });

    Navigate("/edit");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="main-body">
          <div className="row">
            <div className="col-lg-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    {/* <img
                      src={`http://localhost:8000/files/${newProfile}`}
                      alt="Admin"
                      className="rounded-circle p-1 bg-primary"
                      width="110"
                    /> */}
                    <div className="mt-3">
                      <h4>{user.name}</h4>
                      <p className="text-secondary mb-1">{user.email}</p>
                      <p className="text-muted font-size-sm">
                        Bay Area, San Francisco, CA
                      </p>
                      <form
                        encType="multipart/form-data"
                        className="text-center pt-5 pl-3"
                      >
                        <input
                          type="file"
                          onChange={(event) => {
                            setProfilePhoto(event.target.files[0]);
                          }}
                          name="picture"
                          accept="Image/*"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card">
                <div className="card-body">
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Full Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          setNewName(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                      <input
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                          setNewEmail(event.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4">
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
                    <div className="col-md-4">
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
                    </div>
                  </div>

                  <button
                    className="btn btn-info"
                    onClick={() => {
                      updateList();
                    }}
                  >
                    update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileEdit;

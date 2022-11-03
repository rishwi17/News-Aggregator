import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../Editor/editArticle.css";
import Navbar from "../Navbar/Navbar";

const EditArticle = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  console.log(title, content);
  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(
      "http://localhost:8000/article",
      {
        title: title,
        content: content,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      }
    );
    alert("article Submitted!!");
    navigate("/article", { replace: true });
    const inputs = document.querySelectorAll("#first_name, #last_name");
    inputs.forEach((input) => {
      input.value = "";
    });
  };
  return (
    <>
      <Navbar />
      <div className="containerr">
        <form id="contact" action="" onSubmit={onSubmit}>
          <h3>Add a new News Article</h3>
          <fieldset>
            <input
              id="first_name"
              placeholder="Your News Title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </fieldset>
          <fieldset>
            <textarea
              id="last_name"
              placeholder="Type your News here...."
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </fieldset>
          <fieldset>
            <button
              name="submit"
              type="submit"
              id="contact-submit"
              data-submit="...Sending"
            >
              Submit
            </button>
          </fieldset>
        </form>
      </div>
    </>
  );
};

export default EditArticle;

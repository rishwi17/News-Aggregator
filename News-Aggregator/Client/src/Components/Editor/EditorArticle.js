import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Articleditor.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditorArticle = () => {
  const [userList, setUserList] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/editor/${params.id}`, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUserList(response.data.articles);
        // console.log(response.data.articles);
      });
  }, [params.id]);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row p-5 justify-content-around">
          {userList &&
            userList.map((cardd, index) => (
              <div className="col-sm-5 lsit  mt-2 mb-3">
                <div className="list mb-2 ">
                  <div className="list-content">
                    <h2>
                      <a to="/" className="text-black">
                        {cardd.title}
                      </a>
                    </h2>
                    {/* <span className="list-meta"> */}
                    <span className="list-meta-item">{cardd.createdAt}</span>
                    <p>{cardd.content}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default EditorArticle;

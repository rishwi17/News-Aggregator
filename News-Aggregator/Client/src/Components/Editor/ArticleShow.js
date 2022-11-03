import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ArticleShow = () => {
  const [userList, setUserList] = useState([]);
  // console.log(userList);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/editors`, {
        headers: {
          Authorization: "Bearer " + window.localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setUserList(response.data.editors);
        console.log(userList);
      });
  }, []);

  return (
    <>
      <div className="container mt-3 mb-5">
        <h1>News By Editors : </h1>
        <div className="card-deck">
          {userList &&
            userList.map((cardd, index) => (
              <div className="card">
                {/* <img className="card-img-top" src="..." alt="Card image cap" /> */}
                <div className="card-body">
                  <h5 className="card-title">{cardd.name}</h5>
                  <p className="card-text">{cardd.id}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {new Date().toLocaleString() + ""}
                    </small>
                  </p>
                  {/* <button
                    className="btn btn-outline-white my-2 my-sm-0"
                    onClick={change}
                    type="submit"
                  >
                    News from the Editor
                  </button> */}
                  <Link
                    className="btn btn-danger"
                    to={{ pathname: `/news/${cardd._id}` }}
                  >
                    Show News by Editor
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default ArticleShow;

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import image from "../../Images/news.jfif";
import "../News-Category/NewsCategory.css";
import Loading from "../Loader/Loading";

const Query = () => {
  const params = useParams();
  const [result, setResult] = useState([]);

  const [isLoading, setLoading] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const news = await axios.get(
          `http://localhost:8000/news/search/${params.queryName}`,
          {
            headers: {
              Authorization: "Bearer " + window.localStorage.getItem("token"),
            },
          }
        );

        if (news) {
          console.log(news);
          setResult(news.data);
          setLoading(false);
        }
        console.log("no newws");
      } catch (err) {
        console.log(err.message);
      }
    }
    fetchData();
  }, [params.queryName]);

  return (
    <div>
      <Navbar />
      <div>
        {isLoading ? (
          <Loading />
        ) : result.length === 0 ? (
          <div className="container">
            <h1 className="title-heading"> SEARCH RESULT NOT FOUND</h1>
          </div>
        ) : (
          <>
            <div className="container">
              <h1 className="title-heading">Search Result</h1>
            </div>
            <div className="band">
              {result.map((cardd, index) => {
                const { title, author } = cardd;
                return (
                  <div className="item" key={index}>
                    <a href={cardd.url} className="card">
                      {cardd.urlToImage ? (
                        <div
                          className="thumb"
                          style={{
                            backgroundImage: `url(${cardd.urlToImage})`,
                          }}
                        ></div>
                      ) : (
                        <div
                          className="thumb"
                          style={{
                            backgroundImage: `url(${image})`,
                          }}
                        ></div>
                      )}
                      <article>
                        <h1>{title}</h1>
                        <span>{author}</span>
                      </article>
                    </a>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Query;

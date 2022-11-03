import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import "./Slider.css";
const axios = require("axios");

const Slider = () => {
  const [Cards, setCards] = useState([]);
  // console.log("hello");
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: {
            country: "in",
            category: "general",
            // apiKey: "b186e59534794e9a9b732580246cf18a",
            // apiKey: "9ad6a21779da47c28dde78964e668571",
            apiKey: "8b08468bd2174e088385c41a3930dc08",
            sortBy: "popularity",
          },
        });
        setCards(res.data.articles.slice(0, 5));
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, []);
  return (
    <div className="outer-div">
      <Carousel infiniteLoop useKeyboardArrows autoPlay>
        {Cards.map((card, index) => {
          const { urlToImage, title, author } = card;
          return (
            <div className="Card" key={index}>
              <div className="gradient">
                <img alt="" src={urlToImage} />
              </div>
              <div className="first-txt">
                <h2>{title}</h2>
                <h4>{author}</h4>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Slider;

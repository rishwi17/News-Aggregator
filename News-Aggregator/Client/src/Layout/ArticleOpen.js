import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { NewsContext } from "../NewsContext";
import { useParams } from "react-router-dom";
import "./article.css";

const ArticleOpen = () => {
  const params = useParams();

  const { value1, value2, value3, value4, value5, value6 } =
    React.useContext(NewsContext);
  const [generalCards, setgeneralCards] = value1;
  const [sportCards, setsportsCards] = value2;
  const [techCards, settechCards] = value3;
  const [businessCards, setbusinessCards] = value4;
  const [healthCards, sethealthCards] = value5;
  const [entertainCards, setentertainCards] = value6;


  const showdata = (category) => {
    if (category === "general") {
      console.log(generalCards);
      return (
        <div className="container wrapper">
          <img
            className="responsiv-img"
            alt=""
            src={generalCards[params.index].urlToImage}
          ></img>
          <h1 className="title">{generalCards[params.index].title}</h1>
          <div className="meta-info">
            <p>{generalCards[params.index].content}</p>
          </div>
          <h1 className="date-right">{generalCards[params.index].author}</h1>

          <p className="entry-content">
            {generalCards[params.index].description}{" "}
            <a
              href={generalCards[params.index].url}
              className="url"
            >
              READ FULL ARTICLE
            </a>
          </p>

          <h3 className="date">{generalCards[params.index].publishedAt}</h3>
          <h3 className="author">{generalCards[params.index].author}</h3>
        </div>
      );
    }
    if (category === "sports") {
      return (
        <div className="container wrapper">
          <img
            className="responsiv-img"
            alt=""
            src={sportCards[params.index].urlToImage}
          ></img>
          <h1 className="title">{sportCards[params.index].title}</h1>
          <div className="meta-info">
            <p>{sportCards[params.index].content}</p>
          </div>
          <h1 className="date-right">{sportCards[params.index].author}</h1>

          <p className="entry-content">
            {sportCards[params.index].description}
            <a
              href={sportCards[params.index].url}
              className="url"
            >
              READ FULL ARTICLE
            </a>
          </p>

          <h3 className="date">{sportCards[params.index].publishedAt}</h3>
          <h3 className="author">{sportCards[params.index].author}</h3>
        </div>
      );
    }
    if (category === "entertainment") {
      return (
        <div className="container wrapper">
          <img
            className="responsiv-img"
            alt=""
            src={entertainCards[params.index].urlToImage}
          ></img>
          <h1 className="title">{entertainCards[params.index].title}</h1>
          <div className="meta-info">
            <p>{entertainCards[params.index].content}</p>
          </div>
          <h1 className="date-right">{entertainCards[params.index].author}</h1>

          <p className="entry-content">
            {entertainCards[params.index].description}
            <a
              href={entertainCards[params.index].url}
              className="url"
            >
              READ FULL ARTICLE
            </a>
          </p>

          <h3 className="date">{entertainCards[params.index].publishedAt}</h3>
          <h3 className="author">{entertainCards[params.index].author}</h3>
        </div>
      );
    }
    if (category === "technology") {
      return (
        <div className="container wrapper">
          <img
            className="responsiv-img"
            alt=""
            src={techCards[params.index].urlToImage}
          ></img>
          <h1 className="title">{techCards[params.index].title}</h1>
          <div className="meta-info">
            <p>{techCards[params.index].content}</p>
          </div>
          <h1 className="date-right">{techCards[params.index].author}</h1>

          <p className="entry-content">
            {techCards[params.index].description}
            <a
              href={techCards[params.index].url}
              className="url"
            >
              READ FULL ARTICLE
            </a>
          </p>

          <h3 className="date">{techCards[params.index].publishedAt}</h3>
          <h3 className="author">{techCards[params.index].author}</h3>
        </div>
      );
    }
    if (category === "business") {
      return (
        <div className="container wrapper">
          <img
            className="responsiv-img"
            alt=""
            src={businessCards[params.index].urlToImage}
          ></img>
          <h1 className="title">{businessCards[params.index].title}</h1>
          <div className="meta-info">
            <p>{businessCards[params.index].content}</p>
          </div>
          <h1 className="date-right">{businessCards[params.index].author}</h1>

          <p className="entry-content">
            {businessCards[params.index].description}
            <a
              href={businessCards[params.index].url}
              className="url"
            >
              READ FULL ARTICLE
            </a>
          </p>

          <h3 className="date">{businessCards[params.index].publishedAt}</h3>
          <h3 className="author">{businessCards[params.index].author}</h3>
        </div>
      );
    }
    if (category === "health") {
      return (
        <div className="container wrapper">
          <img
            className="responsiv-img"
            alt=""
            src={healthCards[params.index].urlToImage}
          ></img>
          <h1 className="title">{healthCards[params.index].title}</h1>
          <div className="meta-info">
            <p>{healthCards[params.index].content}</p>
          </div>
          <h1 className="date-right">{healthCards[params.index].author}</h1>

          <p className="entry-content">
            {healthCards[params.index].description}
            <a
              href={healthCards[params.index].url}
              className="url"
            >
              READ FULL ARTICLE
            </a>
          </p>

          <h3 className="date">{healthCards[params.index].publishedAt}</h3>
          <h3 className="author">{healthCards[params.index].author}</h3>
        </div>
      );
    }
  };

  return (
    <div>
      <Navbar />
      {showdata(params.categoryName)}
    </div>
  );
};

export default ArticleOpen;

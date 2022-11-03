import React, { useState, createContext, useEffect } from "react";
import Loading from "./Components/Loader/Loading";
const axios = require("axios");

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [isLoading, setLoading] = useState([]);

  const [generalCards, setgeneralCards] = useState([]);
  const [sportCards, setsportsCards] = useState([]);
  const [techCards, settechCards] = useState([]);
  const [businessCards, setbusinessCards] = useState([]);
  const [healthCards, sethealthCards] = useState([]);
  const [entertainCards, setentertainCards] = useState([]);
  useEffect(() => {
    async function fetchgeneralData() {
      const category = "general";
      try {
        const news = await axios.get(`http://localhost:8000/news/${category}`, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        });
        if (news) {
          setgeneralCards(news.data.slice(0, 18));
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchgeneralData();

    async function fetchsportsData() {
      const category = "sports";
      try {
        const news = await axios.get(`http://localhost:8000/news/${category}`, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        });
        if (news) {
          setsportsCards(news.data.slice(0, 18));
        }
        // console.log(news.articles);
      } catch (err) {
        console.log(err);
      }
    }
    fetchsportsData();

    async function fetchbusinessData() {
      const category = "business";
      try {
        const news = await axios.get(`http://localhost:8000/news/${category}`, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        });
        if (news) {
          setbusinessCards(news.data.slice(0, 18));
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchbusinessData();

    async function fetchtechData() {
      const category = "technology";
      try {
        const news = await axios.get(`http://localhost:8000/news/${category}`, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        });
        if (news) {
          settechCards(news.data.slice(0, 18));
        }

        // console.log(news.articles);
      } catch (err) {
        console.log(err);
      }
    }
    fetchtechData();

    async function fetchentertainData() {
      const category = "entertainment";
      try {
        const news = await axios.get(`http://localhost:8000/news/${category}`, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        });
        if (news) {
          setentertainCards(news.data.slice(0, 18));
        }
      } catch (err) {
        console.log(err);
      }
    }
    fetchentertainData();

    async function fetchhealthData() {
      const category = "health";
      try {
        const news = await axios.get(`http://localhost:8000/news/${category}`, {
          headers: {
            Authorization: "Bearer " + window.localStorage.getItem("token"),
          },
        });
        if (news) {
          sethealthCards(news.data.slice(0, 18));
        }
        // console.log(news.articles)
      } catch (err) {
        console.log(err);
      }
    }

    fetchhealthData();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const myarray = {
    value1: [generalCards, setgeneralCards],
    value2: [sportCards, setsportsCards],
    value3: [techCards, settechCards],
    value4: [businessCards, setbusinessCards],
    value5: [healthCards, sethealthCards],
    value6: [entertainCards, setentertainCards],
  };

  console.log(myarray)

  return (
    <NewsContext.Provider value={myarray}>
      {isLoading ? <Loading /> : props.children}
    </NewsContext.Provider>
  );
};

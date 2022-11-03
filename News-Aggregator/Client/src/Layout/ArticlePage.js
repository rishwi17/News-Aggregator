import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./article.css";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const params = useParams();

  return (
    <div className="article">
      <Navbar />
      <div className="container wrapper">
        <img
          className="responsiv-img"
          alt=""
          src="https://sportshub.cbsistatic.com/i/r/2021/12/10/c942b659-7ac6-4b72-a40f-687f6fd02119/thumbnail/1200x675/9993d7af4eaa7011f3f0d16d1ea5947a/cook-2.png"
        ></img>
        <h1 className="title">
          Vikings vs. Steelers score: Live updates, results, game stats,
          highlights for 'Thursday Night Football' - CBSSports.com
        </h1>
        <div className="meta-info">
          <p>
            The Vikings needed a last-second stop to secure their sixth win of
            the season
          </p>
        </div>
        <h1 className="date-right">2021-12-10T04:33:00Z</h1>

        <p className="entry-content">
          he Vikings nearly delivered a knockout before having to hold off a
          furious comeback attempt by the visiting Steelers on Thursday night.
          Down 29-0, the Steelers scored 28 of the game's next 35 points…{" "}
          <Link
            to="https://www.cbssports.com/nfl/news/vikings-vs-steelers-score-live-updates-results-game-stats-highlights-for-thursday-night-football/live/"
            className="url"
          >
            READ FULL ARTICLE
          </Link>
        </p>

        <h3 className="date">2021-12-10T04:33:00Z</h3>
        <h3 className="author">Bryan DeArdo</h3>
      </div>
      <Footer />
    </div>
  );
};

export default ArticlePage;

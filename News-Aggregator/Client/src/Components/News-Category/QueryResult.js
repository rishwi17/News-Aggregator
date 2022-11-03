import "./NewsCategory.css";
import { Link } from "react-router-dom";

const Cards = [
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/kejriwal-channi.jpg?fohZhyphwcUymEwl1Snip7Qgiq57VZhn&size=770:433",
    title:
      "This dark-complexioned man doesnt make false promises: Kejriwal attacks Channi",
    author: "December 2, 2021 18:39 IST",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/ezgif-2-540b95107aa9.jpg?DFPfHDg217GOeOVOKZG5bS3XWU0M0_MH&size=770:433",
    title:
      "Rhea Chakraborty says her baby brother Showik is a warrior, asks him to have patience and faith",
    author: " December 2, 2021 20:57 IST",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/Katrina_kaif_vicky_kaushal_ind_2.jpg?W0Ok28vjP8Ldd60QF2hgbKDIFb81Kw2x&size=770:433",
    title:
      "No name tags, just codes for Vicky Kaushal, Katrina Kaif wedding guests: Exclusive",
    author: "December 2, 2021 20:31 IST",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/passengers1_1200x768.jpeg?JYBwwtjoAJqDXkMoXSg5xPB3j.QNa_aM&size=770:433",
    title:
      "Maharashtra revises quarantine norms, RT-PCR mandatory for passengers arriving from 3 high-risk countries ",
    author: "December 2, 2021 20:58 IST",
  },
  {
    img: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202112/coivd-positive-omicron.jpg?oFJ2GVsN5ieOF3fhXYT4yaWGEqdGz1yk&size=770:433",
    title:
      "First Omicron patient submitted negative report from private lab, left India on Nov 27: Karnataka govt",
    author: "December 2, 2021 19:53 IST",
  },
];

const QueryResult = () => {
  return (
    <div>
      <div className="container">
        <h1 className="title-heading">{category.toUpperCase()}</h1>
      </div>
      <div className="band">
        {Cards.map((cardd) => {
          const { urlToImage, title, author } = cardd;
          return (
            <div className="item">
              <Link
                to="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
                className="card"
              >
                <div
                  className="thumb"
                  style={{ backgroundImage: "url(" + urlToImage + ")" }}
                ></div>
                <article>
                  <h1>{title}</h1>
                  <span>{author}</span>
                </article>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QueryResult;

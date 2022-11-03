import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { NewsContext } from "../../NewsContext";

const Footer = () => {
  const { value1 } = React.useContext(NewsContext);
  const [generalCards, setgeneralCards] = value1;
  return (
    <footer className="kilimanjaro_area">
      {/* <!-- Top Footer Area Start --> */}
      <div className="foo_top_header_one section_padding_100_70">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="kilimanjaro_part">
                <h5>About Us</h5>
                <p>
                  It includes rich features &amp; contents. It's designed &amp;
                  developed based on One Page/ Multi-page Layout,blog
                  themes,world press themes and blogspot.
                </p>
              </div>
              <div className="kilimanjaro_part m-top-15">
                <h5>Social Links</h5>
                <ul className="kilimanjaro_social_links">
                  <li>
                    <NavLink to="#">
                      <i aria-hidden="true">
                        <FaFacebook />
                      </i>{" "}
                      Facebook
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="#">
                      <i aria-hidden="true">
                        <FaTwitter />
                      </i>{" "}
                      Twitter
                    </NavLink>
                  </li>

                  <li>
                    <NavLink to="#">
                      <i aria-hidden="true">
                        <FaYoutube />
                      </i>{" "}
                      YouTube
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="kilimanjaro_part">
                <h5>Tags Widget</h5>
                <ul className=" kilimanjaro_widget">
                  <li>
                    <NavLink to="/category/general">General</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/sports">Sports</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/technology">Technology</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/business">Buisness</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/entertainment">Entertainment</NavLink>
                  </li>
                  <li>
                    <NavLink to="/category/health">Health</NavLink>
                  </li>
                </ul>
              </div>

              <div className="kilimanjaro_part m-top-15">
                <h5>Important Links</h5>
                <ul className="kilimanjaro_links">
                  <li>
                    <NavLink to="#">
                      <i className="fa fa-angle-right" aria-hidden="true"></i>
                      Terms &amp; Conditions
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="kilimanjaro_part">
                <h5>Latest News</h5>
                {generalCards.slice(0, 2).map((card,index) => {
                  const { urlToImage, title, author, sourcename } = card;
                  return (
                    <div key={index}>
                      <div className="kilimanjaro_blog_area">
                      <div className="kilimanjaro_thumb">
                        <img className="img-fluid" src={urlToImage} alt="" />
                      </div>
                      <NavLink to="#">{sourcename}</NavLink>
                      <p className="kilimanjaro_date">{title}</p>
                      {/* <p>{author}</p> */}
                    </div>
                    </div>  
                  );
                })}
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              <div className="kilimanjaro_part">
                <h5>Quick Contact</h5>
                <div className="kilimanjaro_single_contact_info">
                  <h5>Phone:</h5>
                  <p>
                    +91 92933 93343 <br /> +91 88392 84925
                  </p>
                </div>
                <div className="kilimanjaro_single_contact_info">
                  <h5>Email:</h5>
                  <p>
                    random.19@iiits.in <br /> random.person@gmail.com
                  </p>
                </div>
              </div>
              <div className="kilimanjaro_part">
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer Bottom Area Start --> */}
      <div className=" kilimanjaro_bottom_header_one section_padding_20 text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p>
                © All Rights Reserved by NewsToday
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

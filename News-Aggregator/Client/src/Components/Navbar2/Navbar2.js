import React from "react";
import logo from "../../Images/logo.png";
import "./Navbar2.css";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div>
      <div className="upper-header container-fluid" style={{ display: "flex" }}>
        <a className="navbar-brand" href="index.php">
          <img src={logo} alt="" width="50" height="50" />
        </a>
        <form className="form-inline  my-2 my-lg-0">
          <div className="search-box">
            <button className="btn-search">
              <i className="fas fa-search"></i>
            </button>
            <input
              type="text"
              className="input-search"
              placeholder="Type to Search..."
            />
          </div>
          {/* <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button> */}
        </form>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="#">
                  HOME
                </a> */}
                <Link to="/" className="nav-link active">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/sports" className="nav-link active">
                  SPORTS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/general" className="nav-link active">
                  GENERAL
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/business" className="nav-link active">
                  BUSINESS
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/category/entertainment" className="nav-link active">
                  ENTERTAINMENT
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/category/health" className="nav-link active">
                  HEALTH
                </Link>
              </li>
            </ul>
          </div>
          <ul>
            <button
              className="btn btn-outline-white my-2 my-sm-0"
              type="submit"
            >
              LOGOUT
            </button>
          </ul>
        </div>
      </nav>

      <div className="box">
        <div className="box-1"></div>
        <div className="box-2"></div>
      </div>

      {/* <section>
        <h1 className="text-center">Hello..!!!</h1>
      </section> */}
    </div>
  );
};

export default Navbar2;

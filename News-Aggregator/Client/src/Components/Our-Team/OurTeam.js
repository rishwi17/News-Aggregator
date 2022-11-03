import React, { useState, useEffect } from "react";
import "./OurTeam.css";
import Member from "./Member";
import logo from "../../Images/logo.png";
import { useNavigate } from "react-router-dom";

var s = {
  height: "80vh",
};

const OurTeam = () => {
  const navigate = useNavigate();
  const logout = () => {
    navigate("/");
  };

  const [developers, setDevelopers] = useState([
    {
      name: "Arihant Jain",
      email: "arihant.j19@iiits.in",
      img: "https://www.pngkit.com/png/full/322-3225019_2996-bitmoji-boy.png",
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkdin: "https://www.linkedin.com/in",
    },

    {
      name: "Chinmay Lohani",
      email: "chinmay.l19@iiits.in",
      img: "https://forums-images.oneplus.net/attachments/854/854419-5f61a96f5280544c9b65803f8299802e.png",
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkdin: "https://www.linkedin.com/in",
    },
    {
      name: "Laukik Verma",
      email: "laukik.v19@iiits.in",
      img: "https://ericsonn.com/resources/bitmoji.png",
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkdin: "https://www.linkedin.com/in",
    },
    {
      name: "Rishwi Prakash",
      email: "rishwi.p19@iiits.in",
      img: "https://yt3.ggpht.com/ytc/AKedOLRdNhtiAU02YLNqTX1gsSt7WrmXPzp8ZfZxLEFw=s900-c-k-c0x00ffffff-no-rj",
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkdin: "https://www.linkedin.com/in",
    },
    {
      name: "Vedant Dhoble",
      email: "vedantmanoj.d19@iiits.in",
      img: "https://i1.wp.com/aceorganicchem.com/blog/wp-content/uploads/2020/02/bitmoji.jpeg?ssl=1",
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkdin: "https://www.linkedin.com/in",
    },
    {
      name: "Isha Agrawal",
      email: "isha.a18@iiits.in",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHqhvouBM5QyCZDP94S2GCZbC7_ZS8ULJOXQ&usqp=CAU",
      facebook: "https://www.facebook.com",
      instagram: "https://www.instagram.com",
      linkdin: "https://www.linkedin.com/in",
    },
  ]);
  const [length, setLength] = useState(0);

  function showDevelopers(start, end) {
    var elements = [];

    for (var i = start; i < end; i++) {
      elements.push(<Member {...developers[i]} key={i} />);
    }

    return elements;
  }

  return (
    <>
      <div className="outerdiv">
        <a className="navbar-brand">
          <img src={logo} alt="" width="50" height="50" />
        </a>
        <div>
          <button
            className="btn btn-outline-white my-2 my-sm-0"
            onClick={logout}
            type="submit"
          >
            HOME
          </button>
        </div>
      </div>
      <div className="bada">
        <section>
          <div className="containerx">{showDevelopers(0, 6)}</div>
        </section>
      </div>
    </>
  );
};

export default OurTeam;

import React from "react";
import "./Main.css";

import img1 from "../../images/client-audiophile.svg";
import img2 from "../../images/client-databiz.svg";
import img3 from "../../images/client-maker.svg";
import img4 from "../../images/client-meet.svg";

const Main = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero-text">
          <h1 className="heading">Make remote work</h1>
          <p className="subheading">
            Get your team in sync, no matter your location. Streamline
            processes, create team rituals, and watch productivity soar.
          </p>
          <a href="/" className="learn">
            Learn more
          </a>
        </div>

        <div className="socials">
          <div className="img-container">
            <img src={img2} alt="" />
          </div>
          <div className="img-container">
            <img src={img1} alt="" />
          </div>
          <div className="img-container">
            <img src={img4} alt="" />
          </div>
          <div className="img-container">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
      <div className="hero-img"></div>
    </main>
  );
};

export default Main;

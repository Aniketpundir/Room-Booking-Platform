import React, { useState } from "react";
import "./Header.css";
import Image from "../../assets/hero_image.jpg";
import Counting from "../Counting/Counting";


const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-text" data-aos="fade-right">
            <h1>
              Find Your Future <br /> <span>Dream Accommodation</span>
            </h1>
            <p>
              Want to find an accommodation? We are ready to <br /> help you
              find one that suits your lifestyle and needs.
            </p>
            <Counting />
          </div>
          <div className="header-image" data-aos="fade-left">
            <img src={Image} alt="hero-image" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

import React from "react";
import fashionImage from "../../assets/fashion-image.png";
import "./Hero.css";
import handIcon from '../../assets/hand_icon.png';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW SEASON, NEW STYLE</h2>
        <div>
          <div className="hero-hand-icon">
            <p>Your</p>
           <img src={handIcon} alt=""/>
          </div>
          <p>Wardrobe's</p>
          <p>Next obsession.</p>
        </div>
        <div className="hero-latest-btn">
          <div>
            Latest Collection
            <i className="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={fashionImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;

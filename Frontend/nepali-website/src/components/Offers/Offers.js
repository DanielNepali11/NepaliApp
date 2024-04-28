import React, { useEffect, useState } from "react";
import "./Offers.css";

const Offers = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    // Dynamically import the image when the component mounts
    const loadImage = async () => {
      const imageModule = await import('../../assets/exclusive_image.png');
      setImage(imageModule.default);
    };

    loadImage(); // Call the function to load the image
  }, []);
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offers For You</h1>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
      {image && <img src={image} alt="" />}
      </div>
    </div>
  );
};

export default Offers;

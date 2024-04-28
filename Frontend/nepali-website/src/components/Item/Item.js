import React, { useEffect, useState } from "react";
import "./Item.css";

const Item = (props) => {
  const [image, setImage] = useState("");

  useEffect(() => {
    const importImage = async (imageName) => {
      try {
        const imageModule = await import(`../../assets/${imageName}`);
        return imageModule.default;
      } catch (error) {
        console.error("Error loading image:", error);
        return null;
      }
    };

    const loadImage = async () => {
      const img = await importImage(props.image);
      setImage(img);
    };

    loadImage();
  }, [props.image]);

  return (
    <div className="item">
      {image && <img src={image} alt="" />}
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        <div className="item-price-old">${props.old_price}</div>
      </div>
    </div>
  );
};

export default Item;

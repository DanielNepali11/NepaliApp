import React, { useEffect, useState } from "react";
import "./Popular.css";
import Item from "../Item/Item";
import axios from "axios";

const Popular = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    const fetchNewCollection = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product/popular");
        const data = response.data;
        setNewCollection(data);
      } catch (error) {
        console.error("Error fetching new collections:", error);
      }
    };
    fetchNewCollection();
  }, []);
  return (
    <div className="popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {newCollection.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;

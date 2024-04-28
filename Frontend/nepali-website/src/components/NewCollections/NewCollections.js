import React, { useEffect, useState } from "react";
import "./NewCollections.css";
import Item from "../Item/Item";
import axios from "axios";

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    const fetchNewCollection = async () => {
      try {
        const response = await axios.get("http://localhost:8080/product/newCollections");
        const data = response.data;
        setNewCollection(data);
      } catch (error) {
        console.error("Error fetching new collections:", error);
      }
    };
    fetchNewCollection();
  }, []);
  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
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

export default NewCollections;

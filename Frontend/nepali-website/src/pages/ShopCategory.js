import {React, useState, useEffect} from 'react';
import axios from 'axios';
import Item from '../components/Item/Item';
import './ShopCategory.css'

const ShopCategory = (props) => {
  const [newCollection, setNewCollection] = useState([]);

  useEffect(() => {
    const fetchNewCollection = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/product/category/${props.category}`);
        if(response.status===200){
          const data = response.data;
          setNewCollection(data);
        } else if(response.status===404){
          console.log('Category not found');
        } else{
          console.log("Server Error");
        }
      } catch (error) {
        console.error("Error fetching new collections:", error);
      }
    };
    fetchNewCollection();
  }, [props.category]);
  return (
    <div className='category-container'>
    <div className='banner-section'>
      <img src={props.banner} alt='' />
    </div>
    <div className="category-item">
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
  )
}

export default ShopCategory
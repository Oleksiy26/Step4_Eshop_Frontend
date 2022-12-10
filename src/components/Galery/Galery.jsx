import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';
// import { useSelector } from 'react-redux';

import './Galery.scss';

const Galery = ({ numOfElem, collectionId }) => {
  // const products = useSelector((state) => state.products);
  const [products, setProducts] = useState([]);

  // const slice = products.slice(0, numOfElem);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/products/filter?color=red,pink')
      .then((data) => {
     
        setProducts(data.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ul className="content-list">
      {products.length ? (
        <>
          {products.map((item) => (
            <li key={item._id}>
              <ProductCard
                price={item.price}
                photoUrl={item.imageUrls[0]}
                key={item._id}
                id={item._id}
              />
            </li>
          ))}
        </>
      ) : null}
    </ul>
  );
};
export default Galery;

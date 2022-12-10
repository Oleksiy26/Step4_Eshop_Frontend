import React from 'react';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

import './Galery.scss';

const Galery = ({ numOfElem }) => {
  const products = useSelector((state) => state.products);
  const slice = products.products.slice(0, numOfElem);
  
  return (
    <ul className="content-list">
      {products.products.length ? (
        <>
          {slice.map((item) => (
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

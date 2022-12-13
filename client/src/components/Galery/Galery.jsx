import React from 'react';
import ProductCard from '../ProductCard';
import { useSelector } from 'react-redux';

import './Galery.scss';
import { useNavigate, useParams } from "react-router-dom";

const Galery = ({ numOfElem }) => {
  // const { itemNo } = useParams()

  // incorrect
  // console.log(itemNo)

  const navigate = useNavigate()
  const products = useSelector((state) => state.products);
  // console.log(products)

  // const { card, isCardLoading, cardError } = useSelector((state) => state.card)
  // console.log(card)

  const slice = products.products.slice(0, numOfElem);

  // console.log(slice)

  return (
    <ul className="content-list">
      {products.products.length ? (
        <>
          {slice.map((item) => (
            <li key={item._id}>
              <ProductCard
                ident={item.itemNo}
                price={item.currentPrice}
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

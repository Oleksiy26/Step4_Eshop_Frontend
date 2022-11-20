import React from 'react';
import { ReactComponent as Favorit } from './svg/favorit.svg';
import './ProductCard.scss';

const ProductCard = ({ price, photoUrl, subClass }) => {
  return (
    <div className={`set-card ${subClass}`}>
      <div className="image-wrapper">
        <img src={photoUrl} alt="girl" className="set-img" />
      </div>
      <div className="text-wrapper">
        <h3 className="set-title">White lace set</h3>
        <p className="set-price">{price} &euro;</p>
      </div>

      <div className="colors-wrapper">
        <div className="wite"></div>
        <div className="black"></div>
        <div className="gray"></div>
      </div>

      <div className="set-hover">
        <button className="set-addcart">Add to cart</button>
        <div className="set-addfavorit">
          <Favorit className="set-addfavorit_img" />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;

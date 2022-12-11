import React from 'react';
import Favicon from './Favicon/Favicon';
import './AddCartFavorit.scss';

const AddCartFavorit = ({ inFav, inCart, cardId, onClickToCart, onClickFav }) => {
  return (
    <div className="set-hover">
      <button className="set-addcart" onClick={() => onClickToCart(cardId)}>
        {!inCart ? 'Add to cart' : 'Delate from cart'}
      </button>
      <div className="set-addfavorit">
        <Favicon onClick={() => onClickFav(cardId)} inFav={inFav} />
      </div>
    </div>
  );
};

export default AddCartFavorit;

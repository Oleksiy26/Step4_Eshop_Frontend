import React from 'react';
import Favicon from './Favicon/Favicon';
import './AddCartFavorit.scss';

const AddCartFavorit = ({ inFav, inCart, cardId, onClickToCart, onClickFav }, addCartFavProps) => {
    const { addItemToCart, addItemToWishlist } = addCartFavProps
  return (
    <div className="set-hover">
      <button className="set-addcart"
        onClick={addItemToCart}
      >
        {!inCart ? 'Add to cart' : 'Delate from cart'}
      </button>
      <div className="set-addfavorit">
        <Favicon
            onClick={addItemToWishlist}
            inFav={inFav}
         />
      </div>
    </div>
  );
};

export default AddCartFavorit;

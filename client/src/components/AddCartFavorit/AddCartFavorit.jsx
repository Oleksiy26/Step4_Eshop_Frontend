import React, {useContext, useState} from 'react';
import Favicon from './Favicon/Favicon';
import './AddCartFavorit.scss';
import {AuthContext} from "../../context/AuthContext";
import {useSelector} from "react-redux";

const AddCartFavorit = ({ inFav, inCart, cardId, onClickToCart, onClickFav }) => {
  const auth = useContext(AuthContext)
  const { isAuthenticated } = auth
  const { favItems } = useSelector((state) => state.wishlist)


  // logs
  // console.log(favItems.products)
  // console.log(cardId)
  // logs

  const addItemToCart = (event) => {
     event.stopPropagation()
     onClickToCart(cardId)
  }

  const addItemToWishlist = (event) => {
     event.stopPropagation()
     onClickFav(cardId)
  }

    return (
    <div className="set-hover">
      <button className="set-addcart"
        onClick={addItemToCart}
      >
        {!inCart ? 'Add to cart' : 'Delate from cart'}
      </button>
      <div className="set-addfavorit">
        <Favicon
            // deleteFromWish={deleteFromWish}
            onClick={addItemToWishlist}
            inFav={inFav}
         />
      </div>
    </div>
  );
};

// isAuthenticated ?

export default AddCartFavorit;

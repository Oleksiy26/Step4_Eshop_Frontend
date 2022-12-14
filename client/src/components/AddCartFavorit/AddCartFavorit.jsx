import React, {useContext} from 'react';
import Favicon from './Favicon/Favicon';
import './AddCartFavorit.scss';
import {AuthContext} from "../../context/AuthContext";
import {useSelector} from "react-redux";

const AddCartFavorit = ({ inFav, inCart, cardId, onClickToCart, onClickFav, inWishlist }) => {
    // const { addItemToCart, addItemToWishlist } = addCartFavProps
  const auth = useContext(AuthContext)
  const { isAuthenticated } = auth
  const { favItems } = useSelector((state) => state.wishlist)

  // logs
  // console.log(favItems.products)
  // logs

  const addItemToCart = (event) => {
     event.stopPropagation()
     onClickToCart(cardId)
  }

  // const addItemToWishlist = (event) => {
  //    event.stopPropagation()
  //     onClickFav(cardId)
  // }

    return (
    <div className="set-hover">
      <button className="set-addcart"
        onClick={addItemToCart}
      >
        {!inCart ? 'Add to cart' : 'Delate from cart'}
      </button>
      <div className="set-addfavorit">
        <Favicon
            // onClick={addItemToWishlist}
            onClick={(event) => {
                event.stopPropagation()
                onClickFav(cardId)
            }}
            inWishlist={inWishlist}
            inFav={inFav}
         />
      </div>
    </div>
  );
};

// isAuthenticated ?

export default AddCartFavorit;

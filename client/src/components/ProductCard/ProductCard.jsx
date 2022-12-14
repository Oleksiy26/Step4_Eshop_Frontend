import React, { useEffect, useState } from 'react';
import './ProductCard.scss';
import AddCartFavorit from '../AddCartFavorit';
import { useNavigate } from "react-router-dom";
import { useFunctionality } from "../../hooks/useFunctionality";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist } from "../../store/wishlist/ActionCreator";

const ProductCard = ({ price, photoUrl, subClass, id, ident, item }) => {
  const [inWishlist, setInWishlist] = useState(false)
  const { favItems } = useSelector((state) => state.wishlist)
  const { products } = favItems
  const { inFav, inCart, clickFav, clickToCart, isAuthenticated  } = useFunctionality(id)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const redirectToCardPage = () => {
    navigate(`/catalog/${ident}`)
  }

  // (products) ? setInWishlist(true) : setInWishlist(false)

  const addAuthorized = () => {
     dispatch(addToWishlist(id))
  }

  return (
          <div className={`set-card ${subClass}`} onClick={redirectToCardPage}>
              <div className="image-wrapper">
                  <img src={photoUrl} alt="girl" className="set-img" />
              </div>
              <div className="text-wrapper">
                  <h3 className="set-title">White lace set</h3>
                  <p className="set-price">{ price } &euro;</p>
              </div>

              <div className="colors-wrapper">
                  <div className="color-square white"></div>
                  <div className="color-square black"></div>
                  <div className="color-square gray"></div>
              </div>
              <AddCartFavorit
                  inWishlist={inWishlist}
                  cardId={id}
                  inFav={inFav}
                  inCart={inCart}
                  onClickFav={ isAuthenticated ? addAuthorized : clickFav }
                  onClickToCart={clickToCart}
              />
          </div>
  )
};

// isAuthenticated ? inWishlist :
// isAuthenticated ? addAuthorized() :
export default ProductCard;

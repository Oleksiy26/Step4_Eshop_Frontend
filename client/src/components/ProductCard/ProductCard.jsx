import React, { useEffect, useState } from 'react';
import AddCartFavorit from '../AddCartFavorit';
import { useNavigate } from "react-router-dom";
import { useFunctionality } from "../../hooks/useFunctionality";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, deleteItemFromWishlist } from "../../store/wishlist/ActionCreator";
import './ProductCard.scss';


const ProductCard = ({ price, photoUrl, subClass, id, ident, item }) => {
  const { favItems } = useSelector((state) => state.wishlist)
  const { inFav, inCart, clickFav, clickToCart, isAuthenticated, setInFav } = useFunctionality(id)
  // const [isInWish, setIsInWish] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  console.log(favItems.products)

  const redirectToCardPage = () => {
    navigate(`/catalog/${ident}`)
  }

  // for (let i = 0; i < favItems.products.length; i++) {
  //     console.log(favItems.products[i])
  // }

  // console.log('favItems.products', favItems.products[i])

  const addAuthorized = () => {
    dispatch(addToWishlist(id))
  }

  //   console.log(!!favItems.products)

  const deleteFromWish = () => {
     dispatch(deleteItemFromWishlist(id))
  }

  const onClickFav = () => {
      if(isAuthenticated) {
          // if() {
             addAuthorized()
             setInFav(true)
          // } else {
          //     deleteFromWish()
          //     setInFav(false)
          // }
      } else {
          clickFav(id)
      }
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
                  cardId={id}
                  inFav={inFav}
                  inCart={inCart}
                  // deleteFromWish={deleteFromWish}
                  // onClickFav={clickFav}
                  onClickFav={onClickFav}
                  onClickToCart={clickToCart}
              />
          </div>
  )
};

// clickFav
// isAuthenticated ? inWishlist :
// isAuthenticated ? addAuthorized() :
export default ProductCard

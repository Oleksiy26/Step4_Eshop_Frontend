import React, { useEffect, useState } from 'react';
import AddCartFavorit from '../AddCartFavorit';
import { useNavigate } from "react-router-dom";
import { useFunctionality } from "../../hooks/useFunctionality";
import { useDispatch, useSelector } from "react-redux";
import './ProductCard.scss';


const ProductCard = ({ price, photoUrl, subClass, id, ident, item }) => {
  const { inFav, inCart, clickFav, clickToCart, isAuthenticated, setInFav } = useFunctionality(id)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const redirectToCardPage = () => {
    navigate(`/catalog/${ident}`)
  }

  return (
          <div className={`set-card ${subClass}`} 
        //   onClick={redirectToCardPage}
          >
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
                  onClickFav={() => clickFav(id)}
                  onClickToCart={() => clickToCart(id)}
              />
          </div>
  )
};

export default ProductCard

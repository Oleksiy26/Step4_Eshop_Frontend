import React, { useEffect, useState } from 'react';
import AddCartFavorit from './AddCartFavorit';
import { useNavigate } from "react-router-dom";
import { useFunctionality } from "../../hooks/useFunctionality";
import { useDispatch, useSelector } from "react-redux";
import './ProductCard.scss';
import BlockForCart from './BlocForCart/BlocForCart';


const ProductCard = ({ price, photoUrl, subClass, id, ident, nameCard, viewForCart, quantity }) => {
  const { inFav, inCart, clickFav, clickToCart, setInFav, clickDeleteInCart, clickAddInCart } = useFunctionality(id)
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const redirectToCardPage = () => {
    navigate(`/catalog/${ident}`)
  }

  return !viewForCart ? (
          <div className={`set-card ${subClass}`} 
        //   onClick={redirectToCardPage}
          >
              <div className="image-wrapper">
                  <img src={photoUrl} alt="girl" className="set-img" />
              </div>
              <div className="text-wrapper">
                  <h3 className="set-title">{ nameCard }</h3>
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
  ) : (
    <div className='card'>
      <div className="card_img">
        <img src={photoUrl} alt={nameCard} className="set-img" />
      </div>
      <div className="card_info">
        <h3>{ nameCard }</h3>
        <BlockForCart 
          clickDelete={() => clickDeleteInCart(id)} 
          clickAdd={() => clickAddInCart(id)}
          quantity={quantity}
        />
      </div>
      <div className="card_price">
        <p>{ price } &euro;</p>
        <span onClick={() => clickToCart(id)}>Remove</span>
      </div>
    </div>
  )
};

export default ProductCard

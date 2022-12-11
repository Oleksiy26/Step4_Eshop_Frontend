import React, { useEffect, useState } from 'react';
import './ProductCard.scss';
import { useDispatch } from 'react-redux';
import { checkInCart, checkInFav } from '../../store/counter/counter';
import Favicon from './Favicon/Favicon';
import {useNavigate, useParams} from "react-router-dom";

const ProductCard = ({ price, photoUrl, subClass, id, ident }) => {
  console.log('ident', ident)
  console.log(photoUrl)
  console.log(price)
  console.log(id)
  const [inFav, setInFav] = useState(false);
  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('fav'));
    if (favorite) {
      dispatch(checkInFav(favorite.length));
      favorite.forEach((item) => {
        if (item === id) {
          setInFav(true);
        }
      });
    }
  }, []);

  const clickFav = (id) => {
    if (localStorage.getItem('fav')) {
      const fav = JSON.parse(localStorage.getItem('fav'));
      if (!fav.includes(id)) {
        fav.push(id);
        localStorage.setItem('fav', JSON.stringify(fav));
        setInFav(true);
        dispatch(checkInFav(fav.length));
      } else {
        const newFav = fav.map((item) => {
          return item !== id ? item : null;
        });
        const filter = newFav.filter(checkValue);
        dispatch(checkInFav(filter.length));
        localStorage.setItem('fav', JSON.stringify(filter));
        setInFav(false);
      }
    } else {
      localStorage.setItem('fav', JSON.stringify([id]));
      setInFav(true);
      dispatch(checkInFav(1));
    }
  };

  const clickToCart = () => {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      if (!cart.includes(id)) {
        cart.push(id);
        localStorage.setItem('cart', JSON.stringify(cart));
        setInCart(true);
        dispatch(checkInCart(cart.length));
      } else {
        const newCart = cart.map((item) => {
          return item !== id ? item : null;
        });
        const filter = newCart.filter(checkValue);
        dispatch(checkInCart(filter.length));
        localStorage.setItem('cart', JSON.stringify(filter));
        setInCart(false);
      }
    } else {
      localStorage.setItem('cart', JSON.stringify([id]));
      setInCart(true);
      dispatch(checkInCart(1));
    }
  }

  const checkValue = (value) => {
    return value != null;
  };

  const redirectToCardPage = () => {
    navigate(`/catalog/${ident}`)
  }

  return (
    <div
        className={`set-card ${subClass}`}
        onClick={redirectToCardPage}
    >
      <div className="image-wrapper">
        <img src={photoUrl} alt="girl" className="set-img" />
      </div>
      <div className="text-wrapper">
        <h3 className="set-title">White lace set</h3>
        <p className="set-price">{price} &euro;</p>
      </div>

      <div className="colors-wrapper">
        <div className="color-square white"></div>
        <div className="color-square black"></div>
        <div className="color-square gray"></div>
      </div>

      <div className="set-hover">
        <button className="set-addcart" onClick={() => clickToCart(id)}>
          {!inCart ? "Add to cart" : "Delate from cart"}
        </button>
        <div className="set-addfavorit">
          <Favicon
          onClick={() => clickFav(id)}
          inFav={inFav}
          />
          </div>
      </div>
    </div>
  );
};
export default ProductCard;

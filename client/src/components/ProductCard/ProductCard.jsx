import React, { useEffect, useState } from 'react';
import './ProductCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { checkInCart, checkInFav } from '../../store/counter/counter';
import AddCartFavorit from '../AddCartFavorit';
import { useFetching } from '../../hooks/useFetching';
import axios from "axios";
import { fetchCreateCart } from '../../store/cart/cart';

const checkValue = value => {
  return value != null;
};

export const clickFav = (id, setInFav, dispatch) => {
  if (localStorage.getItem('fav')) {
    const fav = JSON.parse(localStorage.getItem('fav'));
    if (!fav.includes(id)) {
      fav.push(id);
      localStorage.setItem('fav', JSON.stringify(fav));
      setInFav(true);
      dispatch(checkInFav(fav.length));
    } else {
      const newFav = fav.map(item => {
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

const ProductCard = ({ currentPrice, photoUrl, subClass, id }) => {
  const [inFav, setInFav] = useState(false);
  const [inCart, setInCart] = useState(false);
  const dispatch = useDispatch();
  const { loading, request, error, clearError } = useFetching()

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('fav'));
    if (favorite) {
      dispatch(checkInFav(favorite.length));
      favorite.forEach(item => {
        if (item === id) {
          setInFav(true);
        }
      });
    }
  }, []);

  const clickFav = id => {
    if (localStorage.getItem('fav')) {
      const fav = JSON.parse(localStorage.getItem('fav'));
      if (!fav.includes(id)) {
        fav.push(id);
        localStorage.setItem('fav', JSON.stringify(fav));
        setInFav(true);
        dispatch(checkInFav(fav.length));
      } else {
        const newFav = fav.map(item => {
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

  const clickToCart =  (id) => {
    // if (localStorage.getItem('cart')) {
    //   const cart = JSON.parse(localStorage.getItem('cart'));
    //   if (!cart.includes(id)) {
    //     cart.push(id);
    //     localStorage.setItem('cart', JSON.stringify(cart));
    //     setInCart(true);
    //     dispatch(checkInCart(cart.length));
    //   } else {
    //     const newCart = cart.map(item => {
    //       return item !== id ? item : null;
    //     });
    //     const filter = newCart.filter(checkValue);
    //     dispatch(checkInCart(filter.length));
    //     localStorage.setItem('cart', JSON.stringify(filter));
    //     setInCart(false);
    //   }
    // } else {
    //   localStorage.setItem('cart', JSON.stringify([id]));
    //   setInCart(true);
    //   dispatch(checkInCart(1));
    // }
  //   try {
  //     const data = await request('/api/cart', 'PUT', {
        // "products" : [
        //   {
        //     "products": {id}
        //   }
        // ]
  //     })
  // } catch (e) {
  //     console.log(e)

  // }
  // console.log(token);
    dispatch(fetchCreateCart(id))

    
  };

  return (
    <div className={`set-card ${subClass}`}>
      <div className="image-wrapper">
        <img src={photoUrl} alt="girl" className="set-img" />
      </div>
      <div className="text-wrapper">
        <h3 className="set-title">White lace set</h3>
        <p className="set-price">{currentPrice} &euro;</p>
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
        onClickFav={clickFav}
        onClickToCart={clickToCart}
      />
    </div>
  );
};
export default ProductCard;

import React, { useEffect, useState } from 'react';
import { ReactComponent as Favorit } from './svg/favorit.svg';
import { ReactComponent as FavoritCheck } from './svg/favoritCheck.svg';
import './ProductCard.scss';
import { useDispatch, useSelector } from 'react-redux';
import { checkInFav } from '../../store/counter/counter';

const ProductCard = ({ price, photoUrl, subClass, id }) => {
  const [inFav, setInFav] = useState();
  useSelector((state) => state.location)
  const dispatch = useDispatch();
  useSelector((state) => state.location)

  useEffect(() => {
    const favorite = JSON.parse(localStorage.getItem('fav'));
    if (favorite) {
      dispatch(checkInFav(favorite.length))
        favorite.forEach(item => {
            if (item === id) {
              setInFav(true);
            }
        })
    }
  }, []);



  const clickFav = (id) => {
    if (localStorage.getItem('fav')) {
      const fav = JSON.parse(localStorage.getItem('fav'));
      if (!fav.includes(id)) {
        fav.push(id);
        localStorage.setItem('fav', JSON.stringify(fav));
        setInFav(true);
        dispatch(checkInFav(fav.length))
      } else {
        const newFav = fav.map((item) => {
          return item !== id ? item : null
        })
        const filter = newFav.filter(checkValue);
        dispatch(checkInFav(filter.length))
        localStorage.setItem('fav', JSON.stringify(filter));
        setInFav(false);
      }
    } else {
      localStorage.setItem('fav', JSON.stringify([id]));
      setInFav(true);
      dispatch(checkInFav(1))
    }
  };

  const checkValue = (value) => {
    return value != null;
  };


  const checkFavIcon = () => {
    return inFav ? (
      <FavoritCheck
        className="set-addfavorit_img"
        onClick={() => clickFav(id)}
      />
    ) : (
      <Favorit className="set-addfavorit_img" onClick={() => clickFav(id)} />
    );
  };

  return (
    <div className={`set-card ${subClass}`}>
      <div className="image-wrapper">
        <img src={photoUrl} alt="girl" className="set-img" />
      </div>
      <div className="text-wrapper">
        <h3 className="set-title">White lace set</h3>
        <p className="set-price">{price} &euro;</p>
      </div>

      <div className="colors-wrapper">
        <div className="wite"></div>
        <div className="black"></div>
        <div className="gray"></div>
      </div>

      <div className="set-hover">
        <button className="set-addcart">Add to cart</button>
        <div className="set-addfavorit">{checkFavIcon()}</div>
      </div>
    </div>
  );
};
export default ProductCard;

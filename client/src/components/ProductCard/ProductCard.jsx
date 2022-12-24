import React, { useContext } from 'react';
import AddCartFavorit from './AddCartFavorit';
import { useFunctionality } from "../../hooks/useFunctionality";
import './ProductCard.scss';
import BlockForCart from './BlocForCart/BlocForCart';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const ProductCard = ({ price, photoUrl, subClass, id, nameCard, viewForCart, quantity, color, ident }) => {
  const { inFav, inCart, clickFav, clickToCart, clickDeleteInCart, clickAddInCart } = useFunctionality(id)
  const navigate = useNavigate()
  const auth = useContext(AuthContext)
  const { isAuthenticated } = auth
  
  // logs
  // console.log(viewForCart)
  // console.log(isAuthenticated);
  // logs

  const redirectToCardPage = () => {
    navigate(`/catalog/${ident}`)
  }

  const addItemToCart = (event) => {
      event.stopPropagation()
      clickToCart(id)
  }

 const addItemToWishlist = (event) => {
    event.stopPropagation()
    clickFav(id)
 }

  return !viewForCart ? (
    <div className={`set-card ${subClass}`} 
    onClick={redirectToCardPage}
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
        // onClickFav={() => clickFav(id)}
        onClickFav={addItemToWishlist}
        // onClickToCart={() => clickToCart(id)}
        onClickToCart={addItemToCart}

      />
    </div>
  ) : (
    <div className='card'>
      <div className="card_img">
        <img src={photoUrl} alt={nameCard} className="set-img" />
      </div>
      <div className="card_info">
        <h3>{ nameCard }</h3>
        <div>
          <span className='title'>Size</span>
        </div>
        <div>
          <span className='title'>Color</span>
          <div className={`color-square ${color}`}></div>
        </div>
        <div>
          <span className='title'>Quantity</span>
          <BlockForCart 
            clickDelete={() => clickDeleteInCart(id)} 
            clickAdd={() => clickAddInCart(id)}
            quantity={quantity}
          />
        </div>
      </div>
      <div className="card_price">
        <p>{ price } &euro;</p>
        <span onClick={addItemToCart}>Remove</span>
      </div>
    </div>
  )
};

export default ProductCard
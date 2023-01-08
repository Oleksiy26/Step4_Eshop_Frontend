import React from 'react'
import AddCartFavorit from './AddCartFavorit'
import { useFunctionality } from '../../hooks/useFunctionality'
import './ProductCard.scss'
import BlockForCart from './BlocForCart/BlocForCart'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'

const ProductCard = ({
  price,
  photoUrl,
  subClass,
  id,
  nameCard,
  viewForCart,
  quantity,
  color,
  ident,
  size
}) => {
  const {
    inFav,
    inCart,
    clickFav,
    clickToCart,
    clickDeleteInCart,
    clickAddInCart,
    clickDeleteCardInCart
  } = useFunctionality(id)
  const navigate = useNavigate()

  const redirectToCardPage = () => {
    navigate(`/catalog/${ident}`)
  }

  const addItemToCart = event => {
    event.stopPropagation()
    clickToCart(id)
  }

  const addItemToWishlist = event => {
    event.stopPropagation()
    clickFav(id)
  }

  return !viewForCart ? (
    <div className={`set-card ${subClass}`} onClick={redirectToCardPage}>
      <div className='image-wrapper'>
        <img src={photoUrl} alt='girl' className='set-img' />
      </div>
      <div className='text-wrapper'>
        <h3 className='set-title'>{nameCard}</h3>
        <p className='set-price'>{price} &euro;</p>
      </div>
      <div className='info-wrapper'>
        <div className={`color-square ${color}`}></div>
        <span>Size: {size}</span>
        {/* <div className="color-square black"></div>
        <div className="color-square gray"></div> */}
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
      <div className='card_img'>
        <img src={photoUrl} alt={nameCard} className='set-img' />
      </div>
      <div className='card_info'>
        <h3>{nameCard}</h3>
        <div>
          <span className='title'>Size</span>
          <span>{size}</span>
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
      <div className='card_price'>
        <p>{price} &euro;</p>
        <span onClick={() => clickDeleteCardInCart(id)}>Remove</span>
      </div>
    </div>
  )
}

ProductCard.defaultProps = {
  price: 15,
  nameCard: 'alt',
  color: 'yellow'
}

ProductCard.propTypes = {
  price: PropTypes.number,
  photoUrl: PropTypes.string,
  subClass: PropTypes.string,
  id: PropTypes.string,
  nameCard: PropTypes.string,
  viewForCart: PropTypes.bool,
  quantity: PropTypes.number,
  color: PropTypes.string,
  ident: PropTypes.string,
  size: PropTypes.string
}

export default ProductCard

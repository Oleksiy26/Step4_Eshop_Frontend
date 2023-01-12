import React from 'react'
import Favicon from './Favicon/Favicon'
import './AddCartFavorit.scss'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'
import { useFunctionality } from '../../../hooks/useFunctionality'

const AddCartFavorit = ({ subClasss, currentId }) => {
  const { inFav, inCart, clickFav, clickToCart } = useFunctionality(currentId)

  const addItemToCart = event => {
    event.stopPropagation()
    clickToCart(currentId)
  }

  const addItemToWishlist = event => {
    event.stopPropagation()
    clickFav(currentId)
    console.log(currentId)
  }

  return (
    <div className={'set-hover ' + subClasss}>
      <Button
        onClick={addItemToCart}
        className='set-addcart'
        text={!inCart ? 'Add to cart' : 'Delete from cart'}
      />
      <div className='set-addfavorit'>
        <Favicon onClick={addItemToWishlist} inFav={inFav} />
      </div>
    </div>
  )
}

AddCartFavorit.propTypes = {
  inFav: PropTypes.bool,
  inCart: PropTypes.bool,
  cardId: PropTypes.string,
  onClickToCart: PropTypes.func,
  onClickFav: PropTypes.func
}

export default AddCartFavorit

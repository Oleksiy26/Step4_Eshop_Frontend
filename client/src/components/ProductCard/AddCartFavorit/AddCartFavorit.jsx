import React from 'react'
import Favicon from './Favicon/Favicon'
import './AddCartFavorit.scss'
import Button from '../../Button/Button'
import PropTypes from 'prop-types'

const AddCartFavorit = ({
  inFav,
  inCart,
  cardId,
  onClickToCart,
  onClickFav,
}) => {
  return (
    <div className="set-hover">
      <Button
        onClick={onClickToCart}
        className="set-addcart"
        text={!inCart ? 'Add to cart' : 'Delete from cart'}
      />
      {/* <button className="set-addcart" onClick={onClickToCart}>
        {!inCart ? 'Add to cart' : 'Delete from cart'}
      </button> */}
      <div className="set-addfavorit">
        <Favicon onClick={onClickFav} inFav={inFav} />
      </div>
    </div>
  )
}

AddCartFavorit.propTypes = {
  inFav: PropTypes.bool,
  inCart: PropTypes.bool,
  cardId: PropTypes.string,
  onClickToCart: PropTypes.func,
  onClickFav: PropTypes.func,
}

export default AddCartFavorit

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import { fetchCard } from '../../store/card/ActionCreator'
import AddCartFavorit from '../../components/ProductCard/AddCartFavorit'
import './PageItem.scss'
import AlsoLike from '../../components/AlsoLike/AlsoLike'
import Loader from '../../components/Loader'
import Title from '../../components/Title'
import { checkLocation } from '../../store/location/location'
import { useFunctionality } from '../../hooks/useFunctionality'

export const PageItem = () => {
  const { itemNo } = useParams()
  const dispatch = useDispatch()
  const { card, isCardLoading, cardError } = useSelector(state => state.card)
  const { imageUrls, name, currentPrice, size, color, _id } = card
  const location = useLocation()
  const { inFav, inCart, clickFav, clickToCart } = useFunctionality(_id)

  useEffect(() => {
    dispatch(fetchCard(itemNo))
    dispatch(checkLocation(location.pathname))
  }, [dispatch, itemNo])

  useEffect(() => {}, [card])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows: false
  }

  const addItemToCart = event => {
    event.stopPropagation()
    clickToCart(_id)
  }

  const addItemToWishlist = event => {
    event.stopPropagation()
    clickFav(_id)
  }

  return (
    <div className='container'>
      {isCardLoading ? (
        <Loader />
      ) : cardError ? (
        <Title subtitle='Smth wrong happened' />
      ) : (
        <div className='my-5 d-flex flex-column flex-md-row gap-5 justify-content-center'>
          <div className='sliderImg'>
            {imageUrls ? (
              <Slider {...settings}>
                {imageUrls?.map(el => (
                  <img key={el} className='sliderImg' src={el} alt={name} />
                ))}
              </Slider>
            ) : null}
          </div>
          <div>
            <h1>{name && name}</h1>
            <h3>Available</h3>
            <h4 className='my-4'>{currentPrice && currentPrice}$</h4>
            <div className='d-flex gap-4'>
              <p>Available Sizes: </p>
              <div className='d-flex gap-4'>
                {size ? <p>{size}</p> : <>No sizes</>}
              </div>
            </div>
            <div className='d-flex align-items-center'>
              <p className='my-2'>Color:</p>
              <span
                style={{
                  backgroundColor: color ? color : null
                }}
                className={'colorSquare'}
              />
            </div>
            <AddCartFavorit
              subClasss='block_fav'
              cardId={_id}
              inFav={inFav}
              inCart={inCart}
              onClickFav={addItemToWishlist}
              onClickToCart={addItemToCart}
            />
          </div>
        </div>
      )}
      <div className='item-galery-wrapper'>
        <AlsoLike />
      </div>
    </div>
  )
}

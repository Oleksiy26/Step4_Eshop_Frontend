import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import Slider from 'react-slick'
import ProductCard from '../../components/ProductCard'
import { fetchCard } from '../../store/card/ActionCreator'
import AddCartFavorit from '../../components/ProductCard/AddCartFavorit'
import './PageItem.scss'
import { getRandomRange } from '../../components/RandomRange/randomRange'
import AlsoLike from '../../components/AlsoLike/AlsoLike'

export const PageItem = () => {
  const { itemNo } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const products = useSelector(state => state.products)
  // const product = useSelector((state) => state.products.products[id]);
  let arrayofProducts = products.products.length
  let res = getRandomRange(0, arrayofProducts, 5)
  // console.log(products)
  const { card, isCardLoading, cardError } = useSelector(state => state.card)

  const { imageUrls, name, currentPrice, size, color } = card
  // console.log(card)
  // console.log('sizes: ', sizes)

  useEffect(() => {
    dispatch(fetchCard(itemNo))
  }, [itemNo])

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

  return (
    <div className='container'>
      {isCardLoading && <h1 style={{ textAlign: 'center' }}>Loading...</h1>}
      {cardError && <h1>Smth wrong happened</h1>}
      <div className='my-5 d-flex gap-5 justify-content-center'>
        <div className='sliderImg'>
          <Slider {...settings}>
            {card !== undefined
              ? imageUrls?.map(el => (
                  <img key={el} className='sliderImg' src={el} alt='' />
                ))
              : null}
          </Slider>
        </div>
        <div>
          <h1>{card !== undefined && name}</h1>
          <h3>Available</h3>
          <h4 className='my-4'>{card !== undefined && currentPrice}$</h4>
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
                backgroundColor: card !== undefined ? color : null
              }}
              className={'colorSquare'}
            />
          </div>
          <AddCartFavorit />
        </div>
      </div>
      <div className='item-galery-wrapper'>
        <AlsoLike />
      </div>
    </div>
  )
}

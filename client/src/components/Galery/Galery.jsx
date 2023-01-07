import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
// import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilterProducts } from '../../store/filter/filterSlice'
import PropTypes from 'prop-types'

import './Galery.scss'

const Galery = ({ numOfElem }) => {
  // const { itemNo } = useParams()

  // console.log(itemNo)

  // const navigate = useNavigate()
  // const products = useSelector((state) => state.products);
  // console.log(products)

  // const { card, isCardLoading, cardError } = useSelector((state) => state.card)
  // console.log(card)

  const products = useSelector(state => state.filter.products)
  const startPage = useSelector(state => state.filter.startPage)
  const perPage = useSelector(state => state.filter.perPage)
  const totalCount = products.length
  console.log(totalCount)
  const slice = products.slice(0, numOfElem)
  const sort = useSelector(state => state.filter.sort.sortProperty)
  const color = useSelector(state => state.filter.colorName)
  const category = useSelector(state => state.filter.categoryName)
  const size = useSelector(state => state.filter.sizeName)

  const dispatch = useDispatch()

  const categoryFilter = category.length ? `categories=${category}` : ''
  const colorFilter = color.length ? `color=${color}` : ''
  const sizeFilter = size.length ? `size=${size}` : ''

  useEffect(() => {
    dispatch(
      fetchFilterProducts({ categoryFilter, colorFilter, sizeFilter, sort })
    )
  }, [dispatch, categoryFilter, colorFilter, sizeFilter, sort])

  return (
    <ul className='content-list'>
      {products.length ? (
        <>
          {slice.map(item => (
            <li key={item._id}>
              <ProductCard
                ident={item.itemNo}
                price={item.currentPrice}
                photoUrl={item.imageUrls[0]}
                key={item._id}
                id={item._id}
                nameCard={item.name}
                color={item.color}
                size={item.size}
              />
            </li>
          ))}
        </>
      ) : null}
    </ul>
  )
}

Galery.propTypes = {
  numOfElem: PropTypes.number
}

export default Galery

// productsQuantity

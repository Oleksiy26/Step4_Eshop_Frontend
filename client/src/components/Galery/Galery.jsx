import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilterProducts } from '../../store/filter/filterSlice'
import './Galery.scss'

const Galery = () => {
  const products = useSelector(state => state.filter.products)
  const startPage = useSelector(state => state.filter.startPage)
  const perPage = useSelector(state => state.filter.perPage)
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
      fetchFilterProducts({
        categoryFilter,
        colorFilter,
        sizeFilter,
        startPage,
        perPage,
        sort
      })
    )
  }, [
    dispatch,
    categoryFilter,
    colorFilter,
    sizeFilter,
    startPage,
    perPage,
    sort
  ])

  return (
    <ul className='content-list'>
      {products.products ? (
        <>
          {products.products.map(item => (
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

export default Galery

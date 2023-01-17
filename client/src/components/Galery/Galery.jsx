import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFilterProducts, setperPage } from '../../store/filter/filterSlice'
import './index.scss'

const Galery = () => {
  const { products, startPage, perPage, colorName, categoryName, sizeName } =
    useSelector(state => state.filter)
  const sort = useSelector(state => state.filter.sort.sortProperty)

  const dispatch = useDispatch()

  const categoryFilter = categoryName.length ? `categories=${categoryName}` : ''
  const colorFilter = colorName.length ? `color=${colorName}` : ''
  const sizeFilter = sizeName.length ? `size=${sizeName}` : ''

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

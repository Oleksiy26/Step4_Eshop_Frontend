import React, { useEffect, useRef } from 'react'
import ProductCard from '../ProductCard'
import qs from 'qs'
import { useSelector, useDispatch } from 'react-redux'
import {
  fetchFilterProducts,
  setFilters,
  setInitialState
} from '../../store/filter/filterSlice'
import { useNavigate } from 'react-router-dom'
import './index.scss'
import { sortOptions } from '../SortList/SortList'

const Galery = () => {
  const { products, startPage, perPage, color, categories, size } = useSelector(
    state => state.filter
  )
  const sort = useSelector(state => state.filter.sort.sortProperty)

  // const isSearch = useRef(false)
  const isAssembled = useRef(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const categoryFilter = categories.length ? `&categories=${categories}` : ''
  const colorFilter = color.length ? `&color=${color}` : ''
  const sizeFilter = size.length ? `&size=${size}` : ''
  const sortFilter = sort ? `&sort=${sort}` : ''

  useEffect(() => {
    return () => {
      dispatch(setInitialState())
    }
  }, [dispatch])

  useEffect(() => {
    if (window.location.search) {
      const filterParams = qs.parse(window.location.search.substring(1))
      const sort = sortOptions.find(
        obj => obj.sortProperty === filterParams.sortProperty
      )
      console.log(window.location.search)
      dispatch(setFilters({ ...filterParams, sort }))
    }
  }, [dispatch, sort])

  useEffect(() => {
    if (isAssembled.current) {
      const queryString = qs.stringify({
        startPage,
        perPage,
        categories,
        color,
        size,
        sort
      })

      console.log('use effect', queryString)
      navigate(`?${queryString}`)
    }
    isAssembled.current = true
  }, [categories, color, navigate, perPage, size, sort, startPage])

  useEffect(() => {
    dispatch(
      fetchFilterProducts({
        categoryFilter,
        colorFilter,
        sizeFilter,
        startPage,
        perPage,
        sortFilter
      })
    )
  }, [
    dispatch,
    startPage,
    perPage,
    categoryFilter,
    colorFilter,
    sizeFilter,
    sortFilter
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

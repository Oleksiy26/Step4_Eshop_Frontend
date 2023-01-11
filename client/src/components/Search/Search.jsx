import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchFor } from '../../store/searchProducts/ActionCreator'
import ProductCard from '../ProductCard'
import styles from './Search.module.scss'
import Loader from '../Loader'

const SearchForm = () => {
  const [query, setQuery] = useState('')
  const { searchValues, isSearching } = useSelector(state => state.search)
  const products = useSelector(state => state.products.products)
  const dispatch = useDispatch()
  const token = useSelector(state => state.auth.token)

  useEffect(() => {
    if (query) {
      if (token) {
        dispatch(searchFor(query))
      }
    } else {
      if (token) {
        dispatch(searchFor(' '))
      }
    }
  }, [query])

  const changeMeQuery = event => {
    setQuery(event.target.value)
  }

  const serchFurAnaut = products.filter(item => {
    return item.name.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div className={styles.block}>
      <div className={styles.block_content}>
        <div>
          <input
            onChange={changeMeQuery}
            type='text'
            placeholder='Type what to search...'
          />
        </div>
        <div>
          {isSearching ? (
            <Loader />
          ) : token ? (
            searchValues.length ? (
              searchValues.map(searchValue => {
                return (
                  <ProductCard
                    ident={searchValue.itemNo}
                    price={searchValue.currentPrice}
                    nameCard={searchValue.name}
                    currentPrice={searchValue.currentPrice}
                    photoUrl={searchValue.imageUrls[1]}
                    color={searchValue.color}
                    size={searchValue.size}
                    key={searchValue._id}
                    id={searchValue._id}
                    viewForCart
                  />
                )
              })
            ) : (
              <p>No Products</p>
            )
          ) : (
            serchFurAnaut.map(searchValue => {
              return (
                <ProductCard
                  ident={searchValue.itemNo}
                  price={searchValue.currentPrice}
                  nameCard={searchValue.name}
                  currentPrice={searchValue.currentPrice}
                  photoUrl={searchValue.imageUrls[1]}
                  color={searchValue.color}
                  size={searchValue.size}
                  key={searchValue._id}
                  id={searchValue._id}
                  viewForCart
                />
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchForm

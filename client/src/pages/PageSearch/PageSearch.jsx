import React, { useEffect, useState } from 'react'
import { searchFor } from '../../store/searchProducts/ActionCreator'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import './PageSearch.scss'

const PageSearch = () => {
  const [query, setQuery] = useState('')
  const { searchValues, isSearching } = useSelector(state => state.search)
  const dispatch = useDispatch()
  console.log('query', query)

  const changer = async event => {
    event.stopPropagation()
    console.log('query', query)
    dispatch(searchFor(query))
  }

  console.log('query 48: ', query)

  const changeMeQuery = event => {
    setQuery(event.target.value)
  }

  console.log(isSearching)
  // debugger
  return (
    <>
      <div>
        <form onSubmit={changer}>
          <input
            value={query}
            onChange={changeMeQuery}
            type='text'
            placeholder='Search...'
          />
          <button type='submit' disabled={query === '' ? true : false}>
            Search
          </button>
        </form>
      </div>
      {!searchValues.length && (
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          Select what to search...
        </h1>
      )}
      {isSearching && <h1>Loading...</h1>}
      {searchValues.map(searchValue => {
        return (
          <ProductCard
            ident={searchValue.itemNo}
            price={searchValue.currentPrice}
            currentPrice={searchValue.currentPrice}
            photoUrl={searchValue.imageUrls[0]}
            key={searchValue._id}
            id={searchValue._id}
          />
        )
      })}
    </>
  )
}

export default PageSearch

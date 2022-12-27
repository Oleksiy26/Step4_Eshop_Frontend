import React, { useEffect, useState } from 'react'
import { searchFor } from '../../store/searchProducts/ActionCreator'
import { useDispatch, useSelector } from 'react-redux'
import './PageSearch.scss'
import ProductCard from '../../components/ProductCard'
// import ProductCard from '../../components/ProductCard'

const PageSearch = () => {
  const [query, setQuery] = useState('')
  const { searchValues, isSearching } = useSelector(state => state.search)
  console.log(searchValues)
  const dispatch = useDispatch()

  const changer = event => {
    setQuery(event.target.value)
    dispatch(searchFor(query))
    console.log('query ...', query)
    // console.log(event.target.value)
    // console.log(event)
  }

  // useEffect(() => {
  //   changer()
  // }, [query])

  return (
    <>
      <div>
        <form action='#'>
          <input
            value={query}
            onChange={event => setQuery(event.target.value)}
            // onChange={changer}
            type='search'
            placeholder='Search...'
          />
          <button type='submit' onClick={changer}>
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
      {searchValues?.map(searchValue => {
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

import React, { useState } from 'react'
import { searchFor } from '../../store/searchProducts/ActionCreator'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../../components/ProductCard'
import './PageSearch.scss'

const PageSearch = () => {
  const [query, setQuery] = useState('')
  const { searchValues, isSearching } = useSelector(state => state.search)
  const dispatch = useDispatch()

  const changer = async event => {
    event.preventDefault()
    dispatch(searchFor(query))
  }

  const changeMeQuery = event => {
    setQuery(event.target.value)
  }

  return (
    <>
      <div>
        <form onSubmit={changer}>
          <input
            value={query}
            onChange={changeMeQuery}
            type='text'
            placeholder='Type what to search...'
          />
          <button type='submit' disabled={query === '' ? true : false}>
            Search
          </button>
        </form>
      </div>
      {isSearching && <h1 style={{ textAlign: 'center' }}>Loading...</h1>}
      {!isSearching &&
      (searchValues.length === undefined) | !searchValues.length ? (
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          No categorie like that: {query === '' ? <span>' '</span> : query}
        </h1>
      ) : null}
      {searchValues.map(searchValue => {
        return (
          <ProductCard
            ident={searchValue.itemNo}
            price={searchValue.currentPrice}
            currentPrice={searchValue.currentPrice}
            photoUrl={searchValue.imageUrls[1]}
            key={searchValue._id}
            id={searchValue._id}
          />
        )
      })}
    </>
  )
}
export default PageSearch

import React, { useEffect, useState } from 'react'
import { searchFor } from '../../store/searchProducts/ActionCreator'
import { useDispatch, useSelector } from 'react-redux'
import './PageSearch.scss'
import ProductCard from '../../components/ProductCard'
// import ProductCard from '../../components/ProductCard'

const PageSearch = () => {
  const [query, setQuery] = useState('')
  const [searchValues, setSearchValues] = useState([])
  // const { searchValues, isSearching } = useSelector(state => state.search)
  // const dispatch = useDispatch()

  const changer = async (event, query) => {
    event.stopPropagation()
    console.log('query', query)
    try {
      const response = await fetch(`/api/products/search/`, {
        method: 'POST',
        body: JSON.stringify({
          query: query
        }),
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${
            JSON.parse(localStorage.getItem(`userToken`)).token
          }`
        }
      })
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      setSearchValues(response.data)
      // log
      console.log('data', data)
      // log
      return data
    } catch (error) {
      console.log(error.message)
    }
    // dispatch(searchFor(query))
  }

  const changeMeQuery = event => {
    setQuery(event.target.value)
  }

  // useEffect(() => {
  //   changer()
  // }, [query])

  console.log('searchValues', searchValues)

  return (
    <>
      <div>
        <form onSubmit={changer}>
          <input
            value={query}
            onChange={changeMeQuery}
            type='search'
            placeholder='Search...'
          />
          <button type='submit'>Search</button>
        </form>
      </div>

      {!searchValues.length && (
        <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
          Select what to search...
        </h1>
      )}
      {/*{isSearching && <h1>Loading...</h1>}*/}
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

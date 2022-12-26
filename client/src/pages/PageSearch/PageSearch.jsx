import React, { useEffect, useState } from 'react'
import { searchFor } from '../../store/searchProducts/ActionCreator'
import { useDispatch } from 'react-redux'
import './PageSearch.scss'

const PageSearch = () => {
  const [query, setQuery] = useState()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(searchFor(query))
  }, [query])

  return (
    <div>
      <form action='#'>
        <input type='search' placeholder='Search...' />
        <button type='submit' onClick={e => setQuery(e.target.value)}>
          Search
        </button>
      </form>
    </div>
  )
}

export default PageSearch

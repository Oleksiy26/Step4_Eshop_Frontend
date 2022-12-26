import { createAsyncThunk } from '@reduxjs/toolkit'

export const searchFor = createAsyncThunk(
  'search/searchInInput',
  async function (query, { rejectWithValue, dispatch }) {
    try {
      const response = await fetch(`/api/products/search/`, {
        method: 'POST',
        body: {
          query: query
        },
        headers: {
          Authorization: `${
            JSON.parse(localStorage.getItem(`userToken`)).token
          }`
        }
      })
      if (!response.ok) {
        throw new Error('Server Error!')
      }
      const data = await response.json()
      // dispatch(checkInFav(data.products.length))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

import { createAsyncThunk } from '@reduxjs/toolkit'

export const searchFor = createAsyncThunk(
  'search/searchInInput',
  async function (query, { rejectWithValue }) {
    try {
      const response = await fetch(`/api/products/search`, {
        method: 'POST',
        body: JSON.stringify({
          query: query
        }),
        headers: {
          Connection: 'keep-alive',
          'Accept-Encoding': 'gzip, deflate, br',
          Accept: '*/*',
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
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

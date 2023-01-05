import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const searchIt = createAsyncThunk(
  'searchIt/searchItems',
  async (query, { rejectWithValue }) => {
    try {
      const response = await axios.post(`/api/products/search`, {
        query: query
      })
      console.log(response)
      return response.data
    } catch (e) {
      return rejectWithValue('Error occurred')
    }
  }
)

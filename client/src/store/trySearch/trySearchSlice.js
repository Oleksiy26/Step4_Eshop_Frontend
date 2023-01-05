import { createSlice } from '@reduxjs/toolkit'
import { searchIt } from './ActionCreator'

const initialState = {
  searchValues: [],
  isSearching: false,
  searchError: ''
}

export const trySearchSlice = createSlice({
  name: 'searchit',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(searchIt.fulfilled, (state, action) => {
        state.isSearching = false
        state.searchError = ''
        state.searchValues = action.payload
      })
      .addCase(searchIt.pending, state => {
        state.isSearching = true
      })
      .addCase(searchIt.rejected, (state, action) => {
        state.isSearching = false
        state.searchError = action.payload
      })
  }
})

export default trySearchSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  locationFav: false,
  locationCart: false,
  locationMain: false,
  locationLogin: false,
}

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    checkLocation: (state, action) => {
      if (action.payload === '/fav') {
        state.locationFav = true
        state.locationCart = false
        state.locationMain = false
        state.locationLogin = false
      } else if (action.payload === '/') {
        state.locationFav = false
        state.locationCart = false
        state.locationMain = true
        state.locationLogin = false
      } else if (action.payload === '/cart') {
        state.locationFav = false
        state.locationCart = true
        state.locationMain = false
        state.locationLogin = false
      } else if (action.payload === '/login') {
        state.locationFav = false
        state.locationCart = false
        state.locationMain = false
        state.locationLogin = true
      }
    },
  },
})

export const { checkLocation } = locationSlice.actions

export default locationSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uTocken: '',
  _id: '',
  firstName: '',
  lastName: '',
  email: '',
  joinDate: '',
  cart: []
  // history ?
  // favorites ?
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}
})

export default userSlice.reducer

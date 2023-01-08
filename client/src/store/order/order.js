import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDeleteCart } from '../cart/cart'

export const fetchMakeOrder = createAsyncThunk(
  'makeOrder/fetchMakeOrder',
  async function (values, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    const customerId = getState().user.info._id

    const { value } = values
    try {
      const respons = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: stateToken
        },
        body: JSON.stringify({
          customerId: customerId,
          email: value.email,
          mobile: value.phone,
          letterSubject: 'sdfs',
          letterHtml: 'sfedfs',
          status: 'not shipped',
          canceled: false
          // deliveryAddress: {
          //   country: value.country,
          //   city: value.city,
          //   address: value.adress,
          //   postal: value.zipCode
          // }
        })
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      dispatch(fetchDeleteCart())
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  order: {},
  status: null,
  error: null
}

export const orderSlice = createSlice({
  name: 'makeOrder',
  initialState,
  extraReducers: {
    [fetchMakeOrder.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchMakeOrder.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.order = action.payload
    },
    [fetchMakeOrder.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export default orderSlice.reducer

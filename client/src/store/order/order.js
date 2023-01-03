import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchMakeOrder = createAsyncThunk(
  'makeOrder/fetchMakeOrder',
  async function (values, { rejectWithValue, getState }) {
    const stateToken = getState().auth.token
    const { value, cardInCart } = values
    try {
      const respons = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json charset=utf-8',
          Authorization: stateToken
        },
        body: JSON.stringify({
          customerId: '6394e6a7ea1df5165ed781fe',
          //   products: cardInCart.products,
          email: value.email,
          mobile: value.mobile,
          letterSubject: 'sdfs',
          letterHtml: 'sfedfs',
          shipping: 'Kiev 50UAH',
          paymentInfo: 'Credit card',
          status: 'not shipped',
          deliveryAddress: {
            country: value.country,
            city: value.city,
            adress: value.adress,
            postal: value.zipCode
          }
        })
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  order: '',
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

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { checkInCart } from '../counter/counter'

export const fetchAddToCart = createAsyncThunk(
  'createCart/fetchAddToCart',
  async function (id, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch(`/api/cart/${id}`, {
        method: 'PUT',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      console.log(data)
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchDeleteFromCart = createAsyncThunk(
  'deleteFromCart/fetchDeleteFromCart',
  async function (id, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch(`/api/cart/product/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchGetAllFromCart = createAsyncThunk(
  'getAllFromCart/fetchGetAllFromCart',
  async function (_, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/cart', {
        method: 'GET',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const fetchDeletaCardFromCart = createAsyncThunk(
  'deletaCardFromCart/fetchDeletaCardFromCart',
  async function (id, { rejectWithValue, getState, dispatch }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch(`/api/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: stateToken
        }
      })
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()
      const total = 0
      const quantity = data.products.map(item => {
        return item.cartQuantity
      })
      const calculateQuantite = quantity.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        total
      )
      dispatch(checkInCart(calculateQuantite))
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  cart: '',
  status: null,
  error: null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: {
    [fetchAddToCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchAddToCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchAddToCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchDeleteFromCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDeleteFromCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchDeleteFromCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchGetAllFromCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchGetAllFromCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchGetAllFromCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    },
    [fetchDeletaCardFromCart.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchDeletaCardFromCart.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.cart = action.payload
    },
    [fetchDeletaCardFromCart.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export default cartSlice.reducer

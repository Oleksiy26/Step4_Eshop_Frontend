import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { checkInCart } from "../counter/counter";

export const fetchCreateCart = createAsyncThunk(
  'createCart/fetchCreateCart',
    async function(id, {rejectWithValue, getState, dispatch}) {
    const stateToken = getState().auth.token
    try {            
      const respons = await fetch(`/api/cart/${id}`,  {
        method: 'PUT',
        headers: {
            'Authorization' : stateToken
            }
        }
        );
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json();
      dispatch(checkInCart(data.products.length))
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteFromCart = createAsyncThunk(
    'deleteFromCart/fetchDeleteFromCart',
      async function(id, {rejectWithValue, getState, dispatch}) {
      const stateToken = getState().auth.token
      try {            
        const respons = await fetch(`/api/cart/${id}`,  {
          method: 'DELETE',
          headers: {
              'Authorization' : stateToken
              }
          }
          );
        if (!respons.ok) {
          throw new Error('Server Error!')
        }
        const data = await respons.json();
        dispatch(checkInCart(data.products.length))
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );

  export const fetchGetAllFromCart = createAsyncThunk(
    'getAllFromCart/fetchGetAllFromCart',
      async function(_, {rejectWithValue, getState, dispatch}) {
      const stateToken = getState().auth.token
      try {            
        const respons = await fetch('/api/cart',  {
          method: 'GET',
          headers: {
              'Authorization' : stateToken
              }
          }
          );
        if (!respons.ok) {
          throw new Error('Server Error!')
        }
        const data = await respons.json();
        dispatch(checkInCart(data.products.length))
        return data;
      } catch (error) {
        return rejectWithValue(error.message);
      }
    }
  );  


const initialState = {
  cart: '',
  status: null,
  error: null
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [fetchCreateCart.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchCreateCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cart = action.payload;
    },
    [fetchCreateCart.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchDeleteFromCart.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchDeleteFromCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cart = action.payload;
    },
    [fetchDeleteFromCart.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    },
    [fetchGetAllFromCart.pending]: (state) => {
        state.status = "loading";
        state.error = null;
    },
    [fetchGetAllFromCart.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.cart = action.payload;
    },
    [fetchGetAllFromCart.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    }
  }
});

export default cartSlice.reducer;
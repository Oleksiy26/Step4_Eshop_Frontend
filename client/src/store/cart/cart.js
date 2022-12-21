import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



export const fetchCreateCart = createAsyncThunk(
  'createCart/fetchCreateCart',
  async function(id, {rejectWithValue, getState}) {
    const stateToken = getState().auth.token
    try {            
      const respons = await fetch('/api/cart',  {
        method: 'PUT',
        body: JSON.stringify({
            "products" : [
                {
                  "product": id,
                  'quantity': '2'
                }
              ]
        }),
        headers: {
            'Authorization' : stateToken
            // 'Authorization' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTFkNzYyMjRiMjk4NzU2MjU0NjI5YSIsImZpcnN0TmFtZSI6IkxpbGkiLCJsYXN0TmFtZSI6IkxpbGlMaWxpIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTY3MTU2MDg0MSwiZXhwIjoxNjcxNTk2ODQxfQ.ajzicrTcHlNaTSSf1glZ5CPSq7ocKcic1qgnr48aKZw"

        }
        }
      );
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json();
      console.log(data);
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
    }
  }
});

export default cartSlice.reducer;
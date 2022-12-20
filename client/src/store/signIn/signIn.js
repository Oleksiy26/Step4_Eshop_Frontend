import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSignIn = createAsyncThunk(
  'signIn/fetchSignIn',
  async function(value, {rejectWithValue}) {
    try {
      const respons = await fetch('/api/customers/login',  {
        method: 'POST',
        body: JSON.stringify({
            loginOrEmail: value.loginOrEmail,
            password: value.password
        }),
        headers: {
            'Content-Type' : 'application/json'
        }
        }
      );
      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  signIn: '',
  status: null,
  error: null
};

export const signInSlice = createSlice({
  name: "signIn",
  initialState,
  extraReducers: {
    [fetchSignIn.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchSignIn.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.signIn = action.payload;
    },
    [fetchSignIn.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    }
  }
});

export default signInSlice.reducer;
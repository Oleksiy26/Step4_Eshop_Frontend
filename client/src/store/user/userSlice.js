import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchGetUser = createAsyncThunk(
  'user/fetchGetUser',
  async function (value, { rejectWithValue, dispatch, getState }) {
    const stateToken = getState().auth.token
    try {
      const respons = await fetch('/api/customers/customer', {
        method: 'GET',
        headers: {
          Authorization: stateToken
        }
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
  info: [],
  status: null,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [fetchGetUser.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchGetUser.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.info = action.payload
    },
    [fetchGetUser.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export default userSlice.reducer

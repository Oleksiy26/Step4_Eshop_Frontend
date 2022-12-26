import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchFilterProducts = createAsyncThunk(
  'filters/fetchFilterProducts',
  async function (filtersData, { rejectWithValue }) {
    const { categoryFilter, colorFilter, sizeFilter, sort } = filtersData

    try {
      const respons = await fetch(
        `/api/products/filter?${categoryFilter}&${colorFilter}&${sizeFilter}&sort=${sort}`
      )

      if (!respons.ok) {
        throw new Error('Server Error!')
      }
      const data = await respons.json()

      return data.products
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

const initialState = {
  products: [],
  status: null,
  error: null,
  categoryName: [],
  colorName: [],
  sizeName: '',
  sort: { sortName: '', sortProperty: '' }
}

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryName = action.payload
    },
    setColor(state, action) {
      state.colorName = action.payload
    },
    setSize(state, action) {
      state.sizeName = action.payload
    },
    setSortType(state, action) {
      state.sort = action.payload
    }
  },
  extraReducers: {
    [fetchFilterProducts.pending]: state => {
      state.status = 'loading'
      state.error = null
    },
    [fetchFilterProducts.fulfilled]: (state, action) => {
      state.status = 'resolved'
      state.products = action.payload
    },
    [fetchFilterProducts.rejected]: (state, action) => {
      state.status = 'rejected'
      state.error = action.payload
    }
  }
})

export const { setCategory, setColor, setSize, setSortType } =
  filterSlice.actions

export default filterSlice.reducer

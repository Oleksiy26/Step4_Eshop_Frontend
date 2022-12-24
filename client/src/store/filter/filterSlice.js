import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryName: [],
  colorName: [],
  sizeName: '',
  sort: { sortName: null, sortProperty: null },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategory(state, action) {
      state.categoryName = action.payload;
    },
    setColor(state, action) {
      state.colorName = action.payload;
    },
    setSize(state, action) {
      state.sizeName = action.payload;
    },
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setColor, setSize, setSortType } = filterSlice.actions;

export default filterSlice.reducer;

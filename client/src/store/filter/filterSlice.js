import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  // sort: { sortName: null, sortProperty: null },
  sort: { sortName: 'Price: High to Low', sortProperty: '-currentPrice' },
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setSortType(state, action) {
      state.sort = action.payload;
    },
  },
});

export const { setSortType } = filterSlice.actions;

export default filterSlice.reducer;

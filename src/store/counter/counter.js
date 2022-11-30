
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    inCart: 0,
    inFav: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    checkInFav: (state, action) => {
      state.inFav = action.payload
    },
  },
});

export const { checkInFav } = counterSlice.actions;

export default counterSlice.reducer;

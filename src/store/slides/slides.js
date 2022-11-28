import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const slidesSlice = createSlice({
  name: "slides",
  initialState,
  reducers: {
    loadSlides: (state, action) => {
      state.push(...action.payload.data);
    },
  },
});

export const { loadSlides } = slidesSlice.actions;

export default slidesSlice.reducer;
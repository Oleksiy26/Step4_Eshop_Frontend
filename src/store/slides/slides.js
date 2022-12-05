import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSlides = createAsyncThunk(
  'slides/fetchSlides',
  async function(_, {rejectWithValue}) {
    try {
      const respons = await fetch('http://localhost:5000/api/slides');
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
  slides: [],
  status: null,
  error: null
};

export const slidesSlice = createSlice({
  name: "slides",
  initialState,
  extraReducers: {
    [fetchSlides.pending]: (state) => {
      state.status = "loading";
      state.error = null;
    },
    [fetchSlides.fulfilled]: (state, action) => {
      state.status = "resolved";
      state.slides = action.payload;
      console.log(state.slides);
    },
    [fetchSlides.rejected]: (state, action) => {
      state.status = "rejected";
      state.error = action.payload;
    }
  }
});

export default slidesSlice.reducer;
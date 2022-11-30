import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locationFav: false,
    locationCart: false,
    locationMain: false
}

const locationSlice = createSlice({
    name: 'location',
    initialState,
    reducers: {
        checkLocation: (state, action) => {
            if (action.payload === '/fav') {
                state.locationFav = true;
                state.locationCart = false;
                state.locationMain = false;
            } else if (action.payload === '/') {
                state.locationFav = false; 
                state.locationCart = false;
                state.locationMain = true;
            }
        }
    }
}) 

export const {checkLocation} = locationSlice.actions;

export default locationSlice.reducer;

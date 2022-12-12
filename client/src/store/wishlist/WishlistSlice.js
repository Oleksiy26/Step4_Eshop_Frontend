import { createSlice } from "@reduxjs/toolkit";
import { fetchWishlist } from "./ActionCreator";

const initialState = {
    favItems: {
        products: [],
        customerId: {},
        _id: ''
    },
    isItemsLoading: false,
    itemsError: ''
}

export const WishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchWishlist.fulfilled, (state, action) => {
                state.isItemsLoading = false
                state.itemsError = ''
                state.favItems = action.payload
            })
            .addCase(fetchWishlist.pending, (state) => {
                state.isItemsLoading = true
            })
            .addCase(fetchWishlist.rejected, (state, action) => {
                state.isItemsLoading = false
                state.itemsError = action.payload
            })
    },
});


export default WishlistSlice.reducer;
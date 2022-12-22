import { createSlice } from "@reduxjs/toolkit";
import { fetchWishlist, addToWishlist, deleteItemFromWishlist } from "./ActionCreator";

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
    extraReducers: {
            [fetchWishlist.pending] : (state) => {
                state.isItemsLoading = true
            },
            [fetchWishlist.fulfilled] : (state, action) => {
                state.isItemsLoading = false
                state.itemsError = ''
                state.favItems.products = action.payload
            },
            [fetchWishlist.rejected] : (state, action) => {
                state.isItemsLoading = false
                state.itemsError = action.payload
            },
            [addToWishlist.pending] : (state) => {
                state.isItemsLoading = true
            },
            [addToWishlist.fulfilled] : (state, action) => {
                state.isItemsLoading = false
                state.itemsError = ''
                state.favItems.products = action.payload
            },
            [addToWishlist.rejected] : (state, action) => {
                state.isItemsLoading = false
                state.itemsError = action.payload
            },
            [deleteItemFromWishlist.pending] : (state) => {
                state.isItemsLoading = true
            },
            [deleteItemFromWishlist.fulfilled] : (state, action) => {
                state.isItemsLoading = false
                state.itemsError = ''
                state.favItems.products = action.payload
            },
            [deleteItemFromWishlist.rejected] : (state, action) => {
                state.isItemsLoading = false
                state.itemsError = action.payload
            }
    },
});

export default WishlistSlice.reducer;
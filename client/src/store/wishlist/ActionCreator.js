import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWishlist = createAsyncThunk(
    'wishlist/fetchCard',
    async function(_, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`/api/wishlist`, {
                headers: {
                    'Authorization': `${JSON.parse(localStorage.getItem(`userToken`)).token}`,
                }
            });
            if (!response.ok) {
                throw new Error('Server Error!')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const addToWishlist = createAsyncThunk(
    'wishlist/addCard',
    async function(itemNo, {rejectWithValue, dispatch}) {
        try {
            const response = await fetch(`/api/wishlist/${itemNo}`, {
                method: 'PUT',
                headers: {
                    'Authorization': `${JSON.parse(localStorage.getItem(`userToken`)).token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Server Error!')
            }
            const data = await response.json();
            dispatch(addToWishlist(itemNo))
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteItemFromWishlist = createAsyncThunk(
    'wishlist/deleteCard',
    async function(itemNo, {rejectWithValue}) {
        try {
            const response = await fetch(`/api/wishlist/${itemNo}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `${JSON.parse(localStorage.getItem(`userToken`)).token}`,
                },
            });
            if (!response.ok) {
                throw new Error('Server Error!')
            }
            const data = await response.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
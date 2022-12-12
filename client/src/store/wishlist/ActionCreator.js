import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWishlist = createAsyncThunk(
    'wishlist/fetchCard',
    async function(_, {rejectWithValue}) {
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
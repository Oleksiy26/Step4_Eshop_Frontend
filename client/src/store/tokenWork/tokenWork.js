import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: ''
}

const storageName = 'userToken'

const tokenWorkSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
                state.token = action.payload;
                localStorage.setItem(
                    storageName,
                    JSON.stringify({
                        token: action.payload,
                    })
                )
        },
        logout: (state) => {
            state.token = 'null'
            localStorage.removeItem(storageName)
        }
    }
}) 

export const {login} = tokenWorkSlice.actions;

export default tokenWorkSlice.reducer;
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from './counter/counter';
import locationSlice from './location/location';
import productSlice from './products/productSlice';
import slidesSlice from './slides/slides';
import userSlice from './user/userSlice';
import filterSlice from './filter/filterSlice';
import tokenWorkSlice from './tokenWork/tokenWork';
import signInSlice from './signIn/signIn';
import loginSlice from './login/login';

const rootReducer = combineReducers({
  user: userSlice,
  products: productSlice,
  slides: slidesSlice,
  location: locationSlice,
  counter: counterSlice,
  filter: filterSlice,
  auth: tokenWorkSlice,
  signIn: signInSlice,
  login: loginSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

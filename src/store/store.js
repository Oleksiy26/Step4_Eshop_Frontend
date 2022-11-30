import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counter";
import  locationSlice  from "./location/location";
import productSlice from "./products/productSlice";
import slidesSlice  from "./slides/slides";
import userSlice from "./user/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
  products: productSlice,
  slides: slidesSlice,
  location: locationSlice,
  counter: counterSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import slidesSlice  from "./slides/slides";
import userSlice from "./user/userSlice";

const rootReducer = combineReducers({
  user: userSlice,
  products: productSlice,
  slides: slidesSlice
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

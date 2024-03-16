import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import productSlice from "./Slices/productSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product : productSlice
  },
});

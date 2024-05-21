import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/authSlice";
import productSlice from "./Slices/productSlice";
import invoiceSlice from "./Slices/invoiceSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    product: productSlice,
    invoice: invoiceSlice
  },
});

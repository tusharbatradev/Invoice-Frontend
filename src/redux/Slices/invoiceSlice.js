import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customer: {
    customerFirstName: "",
    customerLastName: "",
    customerContact: "",
    customerAddress: "",
    customerCity: "",
    customerPincode: "",
  },
  products: [],
  invoice: {
    grandTotal: 0,
    total: 0,
    gst: 3,
    amountPaid: 0,
    discount: 0,
    remainingBalance: 0,
  },
  oldGold: {
    weight: 0,
    cost: 0,
  },
  oldSilver: {
    weight: 0,
    cost: 0,
  },
};

const invoiceSlice = createSlice({
  name: "invoice",
  initialState,
  reducers: {
    updateCustomerField: (state, action) => {
      const { key, value } = action.payload;
      state.customer[key] = value;
    },
    updateOldGoldField: (state, action) => {
      const { key, value } = action.payload;
      state.oldGold[key] = value;
    },
    updateOldSilverField: (state, action) => {
      const { key, value } = action.payload;
      state.oldSilver[key] = value;
    },
    fillProductsField: (state, action) => {
      const { id, field, value } = action.payload;
      const existingProduct = state.products.find(
        (product) => product.id === id
      );
      if (existingProduct) {
        existingProduct[field] = value;
      }
    },
    updateInvoiceField: (state, action) => {
      const { key, value } = action.payload;
      state.invoice[key] = value;
    },
    addProduct: (state, action) => {
      const newProduct = action.payload;
      state.products = [...state.products, newProduct];
    },
    removeProduct: (state, action) => {
      const { id } = action.payload;
      state.products = state.products.filter((product) => product.id !== id);
    },
  },
});

export const {
  updateCustomerField,
  fillProductsField,
  updateInvoiceField,
  addProduct,
  removeProduct,
  updateOldGoldField,
  updateOldSilverField,
} = invoiceSlice.actions;
export default invoiceSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productName: "",
    availability: false
}

const productSlice = createSlice({
    name : 'product',
    initialState,
    reducers:{
        updateProductField: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        },
        clearProductField : () => {
            return initialState
        }
    }
})

export const {updateProductField, clearProductField} = productSlice.actions;
export default productSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isUserLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Login: (state) => {
      state.isUserLoggedIn = true;
    },
    Logout: (state) => {
      state.isUserLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { Login, Logout } = authSlice.actions;

export default authSlice.reducer;

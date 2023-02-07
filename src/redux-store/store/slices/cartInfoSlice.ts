import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

export const cartInfoSlice = createSlice({
  name: "cartInfo",
  initialState,
  reducers: {
    setChangeCartDetailsStatus: (state) => {
      state.cartDetailsStatus = !state.cartDetailsStatus;
    },
  },
});

export const { setChangeCartDetailsStatus } = cartInfoSlice.actions;

export default cartInfoSlice.reducer;

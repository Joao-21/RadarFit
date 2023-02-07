import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../../mockedData";
import { cartInfoInitialState as initialState } from "./initialState";

export const cartInfoSlice = createSlice({
  name: "cartInfo",
  initialState,
  reducers: {
    setChangeCartDetailsStatus: (state) => {
      state.status = !state.status;
    },
    setAddedProduct: (state, action: PayloadAction<ProductProps[]>) => {
      state.items = action.payload;
    },
    setChangeSnackbarStatus: (state) => {
      state.snackbarErrorStatus = !state.snackbarErrorStatus;
    },
  },
});

export const {
  setChangeCartDetailsStatus,
  setAddedProduct,
  setChangeSnackbarStatus,
} = cartInfoSlice.actions;

export default cartInfoSlice.reducer;

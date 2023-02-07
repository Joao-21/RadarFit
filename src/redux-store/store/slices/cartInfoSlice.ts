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
    setHandleAddedItems: (state, action: PayloadAction<ProductProps[]>) => {
      state.items = action.payload;
    },
    setChangeSnackbarStatus: (state) => {
      state.snackbarErrorStatus = !state.snackbarErrorStatus;
    },
    setChangeSuccessSnackbar: (state) => {
      state.snackbarSuccessStatus = !state.snackbarSuccessStatus;
    },
    resetStore: (state) => {
      state.status = initialState.status;
      state.items = initialState.items;
    },
  },
});

export const {
  setChangeCartDetailsStatus,
  setHandleAddedItems,
  setChangeSnackbarStatus,
  setChangeSuccessSnackbar,
  resetStore,
} = cartInfoSlice.actions;

export default cartInfoSlice.reducer;

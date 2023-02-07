import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductProps } from "../../../mockedData";
import { productsListInitialState as initialState } from "./initialState";

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductsList: (state, action: PayloadAction<ProductProps[]>) => {
      state.productList = action.payload;
    },
  },
});

export const { setProductsList } = productSlice.actions;

export default productSlice.reducer;

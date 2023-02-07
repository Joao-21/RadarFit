import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { userInitialState as initialState } from "./initialState";

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserCoins: (state, action: PayloadAction<number>) => {
      state.coins = action.payload;
    },
  },
});

export const { setUserCoins } = userSlice.actions;

export default userSlice.reducer;

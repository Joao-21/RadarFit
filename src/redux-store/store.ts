import { configureStore } from "@reduxjs/toolkit";
import cartInfoSlice from "./store/slices/cartInfoSlice";
import productSlice from "./store/slices/productsSlice";
import userSlice from "./store/slices/userSlice";

export const store = configureStore({
  reducer: {
    cartDetails: cartInfoSlice,
    product: productSlice,
    user: userSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

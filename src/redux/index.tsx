import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/slice/AuthSlice";
import counterSlice from "./slice/counter-slice";
import { api } from "./api";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

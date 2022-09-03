import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Slice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

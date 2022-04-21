import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./token-slice";
import userSlice from "./user-slice";
export default configureStore({
    reducer: {
      accesstoken: tokenSlice,
      userdetails: userSlice
    }
  });
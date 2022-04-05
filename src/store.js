import { configureStore } from "@reduxjs/toolkit";
import tokenSlice from "./token-slice";

export default configureStore({
    reducer: {
      accesstoken: tokenSlice
    }
  });
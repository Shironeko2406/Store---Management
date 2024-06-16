import { configureStore } from "@reduxjs/toolkit";
import StoreReducer from "./Reducers/StoreReducer";


export const store = configureStore({
  reducer: {
    StoreReducer
  },
});

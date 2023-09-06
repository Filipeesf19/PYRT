import modalReducer from "./features/modal/modalSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

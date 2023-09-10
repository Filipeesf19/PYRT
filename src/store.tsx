import modalReducer from "./features/modal/modalSlice";
import filterReducer from "./features/filters/IngredientFilterSlice";
import categoryFilterReducer from "./features/filters/CategoryFilterSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    filter: filterReducer,
    categoryFilter: categoryFilterReducer,
  },
});

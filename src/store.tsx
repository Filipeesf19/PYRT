import modalReducer from "./features/modal/modalSlice";
import ingredientFilterReducer from "./features/filters/IngredientFilterSlice";
import categoryFilterReducer from "./features/filters/CategoryFilterSlice";
import addRecipeReducer from "./features/Recipe Setup/addRecipeSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    ingredientFilter: ingredientFilterReducer,
    categoryFilter: categoryFilterReducer,
    addRecipe: addRecipeReducer,
  },
});

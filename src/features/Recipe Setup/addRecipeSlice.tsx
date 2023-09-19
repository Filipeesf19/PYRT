import { createSlice } from "@reduxjs/toolkit";

export interface AddRecipeState {
  recipeName: string;
  category: string;
  servings: number;
  rating: number;
  cookingTime: string;
  image: string;
  numberOfIngredients: number;
  numberOfSteps: number;
  ingredients: string[];
  quantity: number;
  description: string[];
}

const initialState: AddRecipeState = {
  recipeName: "",
  category: "",
  servings: 0,
  rating: 0,
  cookingTime: "",
  image: "",
  numberOfIngredients: 1,
  numberOfSteps: 1,
  ingredients: [],
  quantity: 1,
  description: [],
};

const addRecipeSlice = createSlice({
  name: "addRecipe",
  initialState,
  reducers: {
    setRating: (state, action) => {
      state.rating = action.payload;
    },
    setCookingTime: (state, action) => {
      state.cookingTime = action.payload;
    },
    increaseIngredients: (state) => {
      if (state.numberOfIngredients < 20) {
        state.numberOfIngredients = state.numberOfIngredients + 1;
      }
    },
    decreaseIngredients: (state) => {
      if (state.numberOfIngredients > 0) {
        state.numberOfIngredients = state.numberOfIngredients - 1;
      }
    },
    increaseSteps: (state) => {
      if (state.numberOfSteps < 20) {
        state.numberOfSteps = state.numberOfSteps + 1;
      }
    },
    decreaseSteps: (state) => {
      if (state.numberOfSteps > 0) {
        state.numberOfSteps = state.numberOfSteps - 1;
      }
    },
  },
});

export const {
  setRating,
  setCookingTime,
  increaseIngredients,
  decreaseIngredients,
  increaseSteps,
  decreaseSteps,
} = addRecipeSlice.actions;

export default addRecipeSlice.reducer;

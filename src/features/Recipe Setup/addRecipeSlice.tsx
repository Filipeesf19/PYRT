import { createSlice } from "@reduxjs/toolkit";

export interface AddRecipeState {
  rating: number;
  cookingTime: string;
  numberOfIngredients: number;
  numberOfSteps: number;
}

const initialState: AddRecipeState = {
  rating: 0,
  cookingTime: "",
  numberOfIngredients: 1,
  numberOfSteps: 1,
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
      state.numberOfIngredients = state.numberOfIngredients + 1;
    },
    decreaseIngredients: (state) => {
      state.numberOfIngredients = state.numberOfIngredients - 1;
    },
    increaseSteps: (state) => {
      state.numberOfSteps = state.numberOfIngredients + 1;
    },
    decreaseSteps: (state) => {
      state.numberOfSteps = state.numberOfIngredients - 1;
    },
  },
});

export const { setRating, setCookingTime } = addRecipeSlice.actions;

export default addRecipeSlice.reducer;

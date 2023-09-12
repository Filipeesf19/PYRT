import { createSlice } from "@reduxjs/toolkit";

export interface AddRecipeState {
  rating: number;
  cookingTime: string;
}

const initialState: AddRecipeState = { rating: 0, cookingTime: "" };

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
  },
});

export const { setRating, setCookingTime } = addRecipeSlice.actions;

export default addRecipeSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  shoppingList,
  filterCategories,
  ShoppingList,
  Category,
} from "../../utils/data";

interface FilterState {
  itemList: ShoppingList[];
  selectedIngredients: string[];
  categoryList: Category[];
  selectedCategories: string[];
}
const initialState: FilterState = {
  itemList: shoppingList,
  selectedIngredients: [],
  categoryList: filterCategories,
  selectedCategories: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Reducer to handle ingredient changes
    toggleIngredient: (state, action: PayloadAction<string>) => {
      const { selectedIngredients } = state;
      const ingredient = action.payload;

      if (selectedIngredients.includes(ingredient)) {
        state.selectedIngredients = selectedIngredients.filter(
          (item: string) => item !== ingredient
        );
      } else {
        state.selectedIngredients = [...selectedIngredients, ingredient];
      }
    },
  },
});

export const { toggleIngredient } = filterSlice.actions;

export default filterSlice.reducer;

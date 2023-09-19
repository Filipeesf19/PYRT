import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shoppingList, ShoppingList } from "../../utils/data";

interface FilterState {
  itemList: ShoppingList[];
  selectedIngredients: string[];
  filteredIngredients: string[];
}
const initialState: FilterState = {
  itemList: shoppingList,
  selectedIngredients: [],
  filteredIngredients: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    // Reducer to handle ingredient changes
    toggleIngredient: (state, action: PayloadAction<string>) => {
      const { selectedIngredients } = state;
      const ingredient = action.payload;

      if (state.selectedIngredients.includes(ingredient)) {
        state.selectedIngredients = selectedIngredients.filter(
          (item: string) => item !== ingredient
        );
      } else {
        state.selectedIngredients = [...selectedIngredients, ingredient];
      }
    },
    updateFilter: (state) => {
      state.filteredIngredients = state.selectedIngredients;
    },
    deleteItem: (state, action: PayloadAction<string>) => {
      const itemToRemove = action.payload;
      state.filteredIngredients = state.filteredIngredients.filter((item) => item !== itemToRemove);
      state.selectedIngredients = state.selectedIngredients.filter((item) => item !== itemToRemove);
    },
  },
});

export const { toggleIngredient, updateFilter, deleteItem } = filterSlice.actions;

export default filterSlice.reducer;

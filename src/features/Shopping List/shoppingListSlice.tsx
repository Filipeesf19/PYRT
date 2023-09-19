import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shoppingList, ShoppingList } from "../../utils/data";

export interface shoppingListState {
  itemList: ShoppingList[];
  uniqueCategories: string[];
}

const initialState: shoppingListState = {
  itemList: shoppingList,
  uniqueCategories: [],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    toggleItem: (state, action: PayloadAction<string>) => {
      const itemClicked = action.payload;
      state.itemList = state.itemList.map((item) => {
        if (item.item === itemClicked) {
          return {
            ...item,
            isNeeded: !item.isNeeded,
          };
        }
        return item;
      });
    },
  },
});

export const { toggleItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;

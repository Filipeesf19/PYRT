import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { shoppingList, ShoppingList } from "../../utils/data";

export interface shoppingListState {
  itemList: ShoppingList[];
  item: string;
  category: string;
  categories: string[];
  uniqueCategories: string[];
}

const initialState: shoppingListState = {
  itemList: shoppingList,
  item: "",
  category: "",
  categories: [],
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
    setItem: (state, action: PayloadAction<string>) => {
      state.item = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    addShoppingItem: (state, action: PayloadAction<ShoppingList>) => {
      const { item, category } = action.payload;
      const newItem = {
        item: item,
        isNeeded: false,
        category: category,
      };
      if (item && category) {
        state.itemList.push(newItem);
        state.item = "";
        state.category = "";
      }
    },
    updateCategories: (state) => {
      state.categories = state.itemList.map((shoppingList: ShoppingList) => shoppingList.category);
      state.uniqueCategories = Array.from(new Set(state.categories));
    },
  },
});

export const { toggleItem, addShoppingItem, setItem, setCategory, updateCategories } =
  shoppingListSlice.actions;

export default shoppingListSlice.reducer;

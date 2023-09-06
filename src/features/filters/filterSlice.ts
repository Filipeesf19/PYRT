// import { createSlice } from "@reduxjs/toolkit";
// import { shoppingList, filterCategories, ShoppingList, Category } from "../../utils/data";

// interface FilterState {
//   ingredientList: ShoppingList[];
//   selectedIngredients: string[];
//   categoryList: Category[];
//   selectedCategories: string[];
// }

// const initialState: FilterState = {
//   ingredientList: shoppingList,
//   selectedIngredients: boolean,
//   categoryList: filterCategories,
//   selectedCategories: boolean,
// };

// const modalSlice = createSlice({
//   name: "filter",
//   initialState,
//   reducers: {
//     openModal: (state) => {
//       state.isModalMainOpen = true;
//     },

//   },
// });

// export const {
//   openModal,
//   openAddCategoryModal,
//   openAddRecipeModal,
//   openAddToShoppingModal,
//   openEditCategoryModal,
//   openEditRecipeModal,
//   openIngredientFilterModal,
//   openCategoryFilterModal,
//   closeAllModals,
// } = modalSlice.actions;

// export default modalSlice.reducer;

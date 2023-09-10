import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  isModalMainOpen: boolean;
  isAddRecipeModalOpen: boolean;
  isDeleteCategoryModalOpen: boolean;
  isAddToShoppingListModalOpen: boolean;
  isEditCategoryModalOpen: boolean;
  isEditRecipeModalOpen: boolean;
  isIngredientFilterModalOpen: boolean;
  isCategoryFilterModalOpen: boolean;
}

const initialState: ModalState = {
  isModalMainOpen: false,
  isAddRecipeModalOpen: false,
  isDeleteCategoryModalOpen: false,
  isAddToShoppingListModalOpen: false,
  isEditCategoryModalOpen: false,
  isEditRecipeModalOpen: false,
  isIngredientFilterModalOpen: false,
  isCategoryFilterModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isModalMainOpen = true;
    },

    openAddRecipeModal: (state) => {
      state.isModalMainOpen = true;
      state.isAddRecipeModalOpen = true;
    },
    openDeleteCategoryModal: (state) => {
      state.isModalMainOpen = true;
      state.isDeleteCategoryModalOpen = true;
    },
    openAddToShoppingModal: (state) => {
      state.isModalMainOpen = true;
      state.isAddToShoppingListModalOpen = true;
    },
    openEditCategoryModal: (state) => {
      state.isModalMainOpen = true;
      state.isEditCategoryModalOpen = true;
    },
    openEditRecipeModal: (state) => {
      state.isModalMainOpen = true;
      state.isEditRecipeModalOpen = true;
    },
    openIngredientFilterModal: (state) => {
      state.isModalMainOpen = true;
      state.isIngredientFilterModalOpen = true;
    },
    openCategoryFilterModal: (state) => {
      state.isModalMainOpen = true;
      state.isCategoryFilterModalOpen = true;
    },
    closeAllModals: () => {
      return { ...initialState };
    },
  },
});

export const {
  openModal,
  openAddRecipeModal,
  openDeleteCategoryModal,
  openAddToShoppingModal,
  openEditCategoryModal,
  openEditRecipeModal,
  openIngredientFilterModal,
  openCategoryFilterModal,
  closeAllModals,
} = modalSlice.actions;

export default modalSlice.reducer;

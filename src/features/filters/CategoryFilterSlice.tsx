import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterCategories, CategoryType } from "../../utils/data";

interface CategoryFilterState {
  categoryList: CategoryType[];
  addCategoryInput: string;
  categoryBeingEdited: string | null;
  editingCategoryInput: string;
}

const initialState: CategoryFilterState = {
  categoryList: filterCategories,
  addCategoryInput: "",
  categoryBeingEdited: "",
  editingCategoryInput: "",
};

const categoryFilterSlice = createSlice({
  name: "categoryFilter",
  initialState,
  reducers: {
    addCategory: (state, action: PayloadAction<string>) => {
      const category = action.payload;
      if (category) {
        const id = crypto.randomUUID();
        state.categoryList.push({ id, category, subCategories: [] });
        state.addCategoryInput = "";
      }
    },
    addSubCategory: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.categoryList.map((item) =>
        item.id === id ? item.subCategories?.push("") : item
      );
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.categoryList = state.categoryList.filter((item) => item.id !== id);
    },
    deleteSubCategory: (state, action: PayloadAction<string>) => {
      const subCategory = action.payload;
      state.categoryList.map((item) =>
        item.subCategories?.filter((subItem) => subItem !== subCategory)
      );
      console.log(subCategory);
    },
    setCategoryInput: (state, action: PayloadAction<string>) => {
      state.addCategoryInput = action.payload;
    },
    openCategoryEditMode: (state, action: PayloadAction<string>) => {
      const categoryBeingEdited = action.payload;
      const editingCategoryInput = action.payload;
      state.categoryBeingEdited = categoryBeingEdited;
      state.editingCategoryInput = editingCategoryInput;
    },
    setEditingCategoryInput: (state, action: PayloadAction<string>) => {
      const editingCategoryInput = action.payload;
      state.editingCategoryInput = editingCategoryInput;
    },
    submitCategoryEdition: (state) => {
      const editingCategoryInput = state.editingCategoryInput;
      const categoryBeingEdited = state.categoryBeingEdited;
      if (editingCategoryInput && categoryBeingEdited !== null) {
        state.categoryList = state.categoryList.map((item, index) =>
          item.category === categoryBeingEdited
            ? { ...item, category: editingCategoryInput }
            : item
        );
      }
      state.editingCategoryInput = "";
      state.categoryBeingEdited = null;
    },
    submitSubCategoryEdition: (state) => {
      const editingCategoryInput = state.editingCategoryInput;
      const categoryBeingEdited = state.categoryBeingEdited;
      if (editingCategoryInput && categoryBeingEdited !== null) {
        state.categoryList = state.categoryList.map((item, index) => {
          if (
            item.subCategories &&
            item.subCategories.includes(categoryBeingEdited)
          ) {
            const index = item.subCategories.indexOf(categoryBeingEdited);
            item.subCategories.splice(index, 1, editingCategoryInput);
          }
          return item;
        });
      }
      state.editingCategoryInput = "";
      state.categoryBeingEdited = null;
    },
  },
});

export const {
  addCategory,
  setCategoryInput,
  openCategoryEditMode,
  setEditingCategoryInput,
  submitCategoryEdition,
  submitSubCategoryEdition,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
} = categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;

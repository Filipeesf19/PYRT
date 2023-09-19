import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { filterCategories, CategoryType } from "../../utils/data";

interface CategoryFilterState {
  categoryList: CategoryType[];
  addCategoryInput: string;
  categoryBeingEdited: string | null;
  editingCategoryInput: string;
  selectedCategory: string | null;
  openCategory: string | null;
  filteredCategory: string | null;
}

const initialState: CategoryFilterState = {
  categoryList: filterCategories,
  addCategoryInput: "",
  categoryBeingEdited: "",
  editingCategoryInput: "",
  selectedCategory: "",
  openCategory: "",
  filteredCategory: "",
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
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setOpenCategory: (state, action: PayloadAction<string>) => {
      if (state.openCategory === action.payload) {
        state.openCategory = "";
      } else {
        state.openCategory = action.payload;
      }
    },
    addSubCategory: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.categoryList.map((item) => (item.id === id ? item.subCategories?.push("") : item));
    },
    deleteCategory: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      state.categoryList = state.categoryList.filter((item) => item.id !== id);
    },
    deleteSubCategory: (state, action: PayloadAction<string>) => {
      const subCategory = action.payload;
      state.categoryList.map(
        (item) =>
          (item.subCategories = item.subCategories?.filter((subCat) => subCat !== subCategory))
      );
      console.log(subCategory);
      console.log(state.categoryList);
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
        state.categoryList = state.categoryList.map((item) =>
          item.category === categoryBeingEdited ? { ...item, category: editingCategoryInput } : item
        );
      }
      state.editingCategoryInput = "";
      state.categoryBeingEdited = "";
    },
    submitSubCategoryEdition: (state) => {
      const editingCategoryInput = state.editingCategoryInput;
      const categoryBeingEdited = state.categoryBeingEdited;
      if (editingCategoryInput && categoryBeingEdited !== null) {
        state.categoryList = state.categoryList.map((item) => {
          if (item.subCategories && item.subCategories.includes(categoryBeingEdited)) {
            const index = item.subCategories.indexOf(categoryBeingEdited);
            item.subCategories.splice(index, 1, editingCategoryInput);
          }
          return item;
        });
      }
      state.editingCategoryInput = "";
      state.categoryBeingEdited = "";
    },
    updateCategoryFilter: (state) => {
      state.filteredCategory = state.selectedCategory;
    },
  },
});

export const {
  addCategory,
  setSelectedCategory,
  setCategoryInput,
  openCategoryEditMode,
  setEditingCategoryInput,
  submitCategoryEdition,
  submitSubCategoryEdition,
  addSubCategory,
  deleteCategory,
  deleteSubCategory,
  setOpenCategory,
  updateCategoryFilter,
} = categoryFilterSlice.actions;

export default categoryFilterSlice.reducer;

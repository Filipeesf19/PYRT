import React from "react";
import { Grid, TextField, List, IconButton, ListItem } from "@mui/material";
import { AddRounded } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { CategoryType } from "../../utils/data";
import Category from "./EditCategoryModalComponents/Category";
import {
  addCategory,
  setCategoryInput,
} from "../../features/filters/CategoryFilterSlice";
import SubCategory from "./EditCategoryModalComponents/SubCategory";

const EditCategoryModal: React.FC = () => {
  const dispatch = useDispatch();
  const { categoryList, addCategoryInput } = useSelector(
    (state: any) => state.categoryFilter
  );

  return (
    <Grid container spacing={2}>
      <Grid
        item
        sx={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          label="Category Name"
          variant="outlined"
          value={addCategoryInput}
          onChange={(e) => dispatch(setCategoryInput(e.target.value))}
        />
        <IconButton
          edge="start"
          aria-label="add"
          onClick={() => {
            dispatch(addCategory(addCategoryInput));
          }}
        >
          <AddRounded />
        </IconButton>
      </Grid>
      <Grid item xs={12}>
        <List disablePadding aria-label="Complete List">
          {categoryList.map((item: CategoryType, index: number) => {
            const { id, category, subCategories } = item;
            return (
              <React.Fragment key={index}>
                <ListItem disablePadding aria-label="List Item">
                  <Category category={category} id={id} />
                </ListItem>
                <List disablePadding>
                  {subCategories &&
                    subCategories.map((subCategory, subIndex) => (
                      <ListItem key={subIndex} sx={{ pl: 4 }} disablePadding>
                        <SubCategory subCategory={subCategory} id={id} />
                      </ListItem>
                    ))}
                </List>
              </React.Fragment>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
};

export default EditCategoryModal;

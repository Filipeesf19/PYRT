import React from "react";
import { Box, Stack, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { CustomText1, CustomIconButton1 } from "../../styling/GlobalStyles";
import { Close, FilterAlt } from "@mui/icons-material";
import { useGlobalContext } from "../../context/GlobalContext";
import { useDispatch } from "react-redux";
import { openIngredientFilterModal } from "../../features/modal/modalSlice";
import { useSelector } from "react-redux";
import { deleteItem } from "../../features/filters/IngredientFilterSlice";

const IngredientFilter: React.FC = () => {
  const { isExtraSmallScreen, isSmallScreen } = useGlobalContext();
  const dispatch = useDispatch();
  const { filteredIngredients } = useSelector((store: any) => store.ingredientFilter);

  return (
    <Box
      aria-label="ingredient_filter_list"
      sx={{ padding: { xs: "1rem 1rem 0 1rem", md: "1rem 2rem 1rem 2rem" } }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <CustomText1>ingredients</CustomText1>
        <CustomIconButton1
          aria-label="add_category"
          onClick={() => dispatch(openIngredientFilterModal())}
        >
          <FilterAlt />
        </CustomIconButton1>
      </Stack>
      <List disablePadding>
        {!(isExtraSmallScreen || isSmallScreen) &&
          filteredIngredients.map((ingredient: string, index: number) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemText>{ingredient}</ListItemText>
                <IconButton
                  edge="end"
                  sx={{ padding: "0" }}
                  onClick={() => dispatch(deleteItem(ingredient))}
                >
                  <Close />
                </IconButton>
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};

export default IngredientFilter;

import React from "react";
import {
  Box,
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import { ingredients } from "../../utils/data";
import { CustomText1, CustomIconButton1 } from "../../styling/GlobalStyles";
import { DeleteRounded, AddCircleRounded } from "@mui/icons-material";
import { useGlobalContext } from "../../context/GlobalContext";

const IngredientFilter: React.FC = () => {
  const { isExtraSmallScreen, isSmallScreen } = useGlobalContext();

  return (
    <Box
      aria-label="ingredient_filter_list"
      sx={{ padding: { xs: "1rem 1rem 0 1rem", md: "1rem 2rem 1rem 2rem" } }}
    >
      <Stack direction="row" justifyContent="center" alignItems="center">
        <CustomText1>ingredients</CustomText1>
        <CustomIconButton1 aria-label="add_category">
          <AddCircleRounded />
        </CustomIconButton1>
      </Stack>
      <List disablePadding>
        {!(isExtraSmallScreen || isSmallScreen) &&
          ingredients.map((ingredient, index) => {
            return (
              <ListItem key={index} disablePadding>
                <ListItemText>{ingredient.label}</ListItemText>
                <IconButton edge="end" sx={{ padding: "0" }}>
                  <DeleteRounded />
                </IconButton>
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};

export default IngredientFilter;

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
      sx={{
        padding: { xs: 1, md: 2, lg: 3 },
      }}
      aria-label="ingredient_filter_list"
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

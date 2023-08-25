import React from "react";
import { Box, Stack, List, ListItem, ListItemText, IconButton } from "@mui/material";
import { ingredients } from "../../utils/data";
import { CustomText1, CustomIconButton1 } from "../../styling/GlobalStyles";
import { Delete, AddCircle } from "@mui/icons-material";

const IngredientFilter: React.FC = () => {
  return (
    <Box
      sx={{
        padding: { xs: 1, md: 2, lg: 3 },
      }}
      aria-label="ingredient_filter_list"
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <CustomText1>ingredients</CustomText1>
        <CustomIconButton1 aria-label="add_category">
          <AddCircle />
        </CustomIconButton1>
      </Stack>
      <List disablePadding>
        {ingredients.map((ingredient, index) => {
          return (
            <ListItem key={index} disablePadding>
              <ListItemText>{ingredient.label}</ListItemText>
              <IconButton edge="end" sx={{ padding: "0" }}>
                <Delete />
              </IconButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default IngredientFilter;

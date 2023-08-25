import React from "react";
import { Box, Card, Stack } from "@mui/material";
import RecipeCard from "./RecipeCard";
import { dayRecipes } from "../../utils/data";
import { CustomButton2, CustomText2 } from "../../styling/GlobalStyles";

const dayPlan: React.FC = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Card sx={{ width: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "primary.main" }}>
          <CustomText2 sx={{ padding: "10px" }}>recipes for the day</CustomText2>
        </Box>
        <Box
          aria-label="Week_Recipes_Container"
          sx={{
            display: "flex",
            padding: "10px",
            overflowX: "auto",
            "& > *": {
              flex: "0 0 auto",
              marginRight: "5px",
            },
            scrollbarWidth: "thin",
            scrollbarColor: "lightgray darkgray",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "darkgray",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "gray",
            },
            "&::-webkit-scrollbar-track": {
              background: "lightgray",
            },
          }}
        >
          {dayRecipes.map((recipe, index) => (
            <RecipeCard key={index} recipe={recipe} />
          ))}
        </Box>
      </Card>
      <CustomButton2 sx={{ margin: "20px" }}>Start Cooking</CustomButton2>
    </Stack>
  );
};

export default dayPlan;

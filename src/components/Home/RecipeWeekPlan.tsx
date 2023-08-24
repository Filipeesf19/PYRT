import React from "react";
import { Stack, Box, Card, Typography, Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { weekRecipes } from "../../utils/data";
import RecipeCard from "./RecipeCard";
import { CustomText2 } from "../../styling/GlobalStyles";

const RecipeWeekPlan: React.FC = () => {
  return (
    <Card>
      <Box sx={{ display: "flex", justifyContent: "center", backgroundColor: "primary.main" }}>
        <CustomText2 sx={{ padding: "10px" }}>week recipes</CustomText2>
      </Box>
      <Stack direction="row" justifyContent="center" alignItems="center" aria-label="Current_Week">
        <Button>
          <ChevronLeft />
        </Button>
        <Typography variant="h6" sx={{ textAlign: "center", padding: "10px" }}>
          week 1 (2 Jan to 8 Jan)
        </Typography>
        <Button>
          <ChevronRight />
        </Button>
      </Stack>
      <Box
        aria-label="Week_Recipes_Container"
        sx={{
          display: "flex",
          padding: "10px",
          overflowX: "auto",
          "& > *": {
            flex: "0 0 auto",
            minWidth: "180px",
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
        {weekRecipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </Box>
    </Card>
  );
};

export default RecipeWeekPlan;

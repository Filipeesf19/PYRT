import React from "react";
import { Stack, Box, Card, Button } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import { weekRecipes } from "../../utils/data";
import RecipeCard from "./RecipeCard";
import { CustomText1, CustomText2 } from "../../styling/GlobalStyles";

const RecipeWeekPlan: React.FC = () => {
  return (
    <Card>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "primary.main",
        }}
      >
        <CustomText2 sx={{ padding: "5px" }}>week recipes</CustomText2>
      </Box>
      <Stack direction="row" justifyContent="center" alignItems="center" aria-label="Current_Week">
        <Button>
          <ChevronLeft />
        </Button>
        <CustomText1 sx={{ textAlign: "center", padding: "10px" }}>
          week 1 (2 Jan to 8 Jan)
        </CustomText1>
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
          <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
            <RecipeCard recipe={recipe} />
          </Box>
        ))}
      </Box>
    </Card>
  );
};

export default RecipeWeekPlan;

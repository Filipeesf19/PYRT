import React from "react";
import { Stack } from "@mui/material";
import RecipeWeekPlan from "./RecipeWeekPlan";
import DayPlan from "./DayPlan";
import RecipeList from "./RecipeList";

const RecipeContainer: React.FC = () => {
  return (
    <Stack spacing={3} aria-label="Recipe_Planner_Container">
      <RecipeList />
      <RecipeWeekPlan />
      <DayPlan />
    </Stack>
  );
};

export default RecipeContainer;

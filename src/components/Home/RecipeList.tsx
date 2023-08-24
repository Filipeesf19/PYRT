import React, { useState } from "react";
import { Box, Grid, Card, Pagination, useMediaQuery, useTheme, Stack } from "@mui/material"; // Import necessary components
import { recipes } from "../../utils/data";
import RecipeCard from "./RecipeCard";
import { CustomIconButton1, CustomText2 } from "../../styling/GlobalStyles";
import { AddCircle } from "@mui/icons-material";

const RecipeList: React.FC = () => {
  const theme = useTheme(); // Fetch the theme object
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "lg")); // Check for medium screens
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl")); // Check for large screens

  let cardsPerPage = 18; // Default value for large screens

  if (isSmallScreen) {
    cardsPerPage = 6; // Adjust for small screens
  } else if (isMediumScreen) {
    cardsPerPage = 9; // Adjust for medium screens
  } else if (isLargeScreen) {
    cardsPerPage = 12; // Adjust for medium screens
  }

  const totalPages = Math.ceil(recipes.length / cardsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (event: React.ChangeEvent<unknown>, newPage: number) => {
    setCurrentPage(newPage);
  };

  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  return (
    <Card>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ backgroundColor: "primary.main", width: "100%" }}
        position="relative"
      >
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CustomText2 sx={{ padding: "10px" }}>recipe list</CustomText2>
        </Box>
        <CustomIconButton1 aria-label="add_category" sx={{ position: "absolute", right: "20px" }}>
          <AddCircle />
        </CustomIconButton1>
      </Stack>
      <Box sx={{ padding: "10px" }}>
        <Grid container aria-label="Recipe_Grid">
          {recipes.slice(startIndex, endIndex).map((recipe, index) => (
            <Grid item xs={4} sm={4} md={4} lg={3} xl={2} key={index}>
              <RecipeCard recipe={recipe} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box sx={{ padding: "10px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          sx={{ display: "flex", justifyContent: "center" }}
        />
      </Box>
    </Card>
  );
};

export default RecipeList;

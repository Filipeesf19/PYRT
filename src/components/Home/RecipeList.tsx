import { Box, Card, Stack, Grid } from "@mui/material"; // Import necessary components
import { recipes } from "../../utils/data";
import RecipeCard from "./RecipeCard";
import { CustomIconButton1, CustomText2 } from "../../styling/GlobalStyles";
import { AddCircle } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { openAddRecipeModal } from "../../features/modal/modalSlice";

const RecipeList: React.FC = () => {
  const dispatch = useDispatch();
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
          <CustomText2 sx={{ padding: "5px" }}>recipe list</CustomText2>
        </Box>
        <CustomIconButton1
          aria-label="add_category"
          sx={{ position: "absolute", right: "20px", padding: "0" }}
          onClick={() => dispatch(openAddRecipeModal())}
        >
          <AddCircle />
        </CustomIconButton1>
      </Stack>
      <Grid
        container
        aria-label="Week_Recipes_Container"
        sx={{
          display: "flex",
          padding: "10px",
          overflowX: "auto",
          flexWrap: "nowrap",
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
        {recipes.map((recipe, index) => (
          <Grid key={index} item sx={{ display: "flex", justifyContent: "center" }}>
            <RecipeCard key={index} recipe={recipe} />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default RecipeList;

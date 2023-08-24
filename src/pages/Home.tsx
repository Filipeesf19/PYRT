import Filter from "../components/Home/Filter";
import { Grid } from "@mui/material";
import IngredientFilter from "../components/Home/IngredientFilter";
import RecipeContainer from "../components/Home/RecipeContainer";

const Home: React.FC = () => {
  return (
    <Grid
      container
      aria-label="Wrapper"
      columns={16}
      sx={{
        bgcolor: "background.paper",
        width: "100%",
      }}
    >
      {/* Category Filters */}
      <Grid item aria-label="Category_Filter" xs={3}>
        <Filter />
      </Grid>
      {/* Central Container */}
      <Grid item aria-label="Recipe_List" xs={11} sx={{ paddingTop: "20px" }}>
        <RecipeContainer />
      </Grid>
      {/* Ingredient Container */}

      <Grid item aria-label="Ingredients_Filter" xs={2}>
        <IngredientFilter />
      </Grid>
    </Grid>
  );
};

export default Home;

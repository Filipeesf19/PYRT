import CategoryFilter from "../components/Home/CategoryFilter";
import { Grid } from "@mui/material";
import IngredientFilter from "../components/Home/IngredientFilter";
import RecipeContainer from "../components/Home/RecipeContainer";
import ModalMain from "../components/Modal/ModalMain";
import AddRecipeModal from "../components/Modal/AddRecipeModal";
import EditCategoryModal from "../components/Modal/EditCategoryModal";
import CategoryFilterModal from "../components/Modal/CategoryFilterModal";
import IngredientFilterModal from "../components/Modal/IngredientFilterModal";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchDataFailure,
  fetchDataStart,
  fetchDataSuccess,
} from "../features/filters/CategoryFilterSlice";
import { useDispatch } from "react-redux";
import { collection } from "firebase/firestore";
import { db } from "../utils/firebase";
import { getDocs } from "firebase/firestore";

const Home: React.FC = () => {
  const {
    isEditCategoryModalOpen,
    isAddRecipeModalOpen,
    isCategoryFilterModalOpen,
    isIngredientFilterModalOpen,
  } = useSelector((store: any) => store.modal);

  const dispatch = useDispatch();

  const { categoryList, loading, error } = useSelector(
    (store: any) => store.categoryFilter
  );

  useEffect(() => const fetchData = async () => {
  try {
    dispatch(fetchDataStart());

    const collectionRef = collection(firestore, 'yourCollectionName');
    const querySnapshot = await getDocs(collectionRef);

    const data: YourItemType[] = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data() as YourItemType);
    });

    dispatch(fetchDataSuccess(data));
  } catch (error) {
    dispatch(fetchDataFailure(error.message));
  }
};[])

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Grid
        container
        aria-label="Wrapper"
        columns={16}
        sx={{
          bgcolor: "background.paper",
          width: "100%",
          padding: "0 15px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        {/* Category Filters */}
        <Grid
          item
          aria-label="Category_Filter"
          xs={6}
          md={3}
          order={{ xs: 1, md: 1 }}
        >
          <CategoryFilter />
        </Grid>
        {/* Central Container */}
        <Grid
          item
          aria-label="Recipe_List"
          xs={16}
          md={10}
          lg={11}
          order={{ xs: 3, md: 2 }}
          sx={{
            paddingTop: { sm: 0, md: "20px" },
          }}
        >
          <RecipeContainer />
        </Grid>
        {/* Ingredient Filter */}
        <Grid
          item
          aria-label="Ingredient_Filter"
          xs={6}
          md={3}
          lg={2}
          order={{ xs: 2, md: 3 }}
        >
          <IngredientFilter />
        </Grid>
      </Grid>
      <ModalMain>
        {isAddRecipeModalOpen && <AddRecipeModal />}
        {isEditCategoryModalOpen && <EditCategoryModal />}
        {isCategoryFilterModalOpen && <CategoryFilterModal />}
        {isIngredientFilterModalOpen && <IngredientFilterModal />}
      </ModalMain>
    </>
  );
};

export default Home;

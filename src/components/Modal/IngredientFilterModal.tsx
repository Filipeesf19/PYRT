import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleIngredient } from "../../features/filters/filterSlice";
import { ShoppingList } from "../../utils/data";

const IngredientFilterModal: React.FC = () => {
  const dispatch = useDispatch();
  const { ingredientList, selectedIngredients } = useSelector(
    (store: any) => store.filter
  );

  // Function to handle the "Apply" button click
  const handleApplyButtonClick = () => {
    // You can perform some action here with the selected ingredients
    console.log("Selected Ingredients:", selectedIngredients);
  };

  return (
    <Box>
      <h1>Ingredients</h1>
      <form>
        {ingredientList.map((shoppingItem: ShoppingList, index: number) => {
          const { item } = shoppingItem;
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedIngredients.includes(item)}
                  onChange={() => dispatch(toggleIngredient(item))}
                  color="primary"
                />
              }
              label={item}
            />
          );
        })}
      </form>
      <Button
        variant="contained"
        color="primary"
        onClick={handleApplyButtonClick}
      >
        Apply
      </Button>
    </Box>
  );
};

export default IngredientFilterModal;

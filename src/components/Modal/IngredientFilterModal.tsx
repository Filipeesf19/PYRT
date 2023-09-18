import { Checkbox, FormControlLabel, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleIngredient } from "../../features/filters/IngredientFilterSlice";
import { ShoppingList } from "../../utils/data";

const IngredientFilterModal: React.FC = () => {
  const dispatch = useDispatch();
  const { itemList, selectedIngredients } = useSelector((store: any) => store.ingredientFilter);

  // Function to handle the "Apply" button click
  const handleApplyButtonClick = () => {
    // You can perform some action here with the selected ingredients
    console.log("Selected Ingredients:", selectedIngredients);
  };

  return (
    <>
      <h1>Ingredients</h1>
      <form>
        <Stack
          sx={{
            maxHeight: "300px",
            overflowY: "scroll",
          }}
        >
          {itemList.map((shoppingItem: ShoppingList, index: number) => {
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
        </Stack>
      </form>
      <Button variant="contained" color="primary" onClick={handleApplyButtonClick}>
        Apply
      </Button>
    </>
  );
};

export default IngredientFilterModal;

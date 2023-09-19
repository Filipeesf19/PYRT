import { Checkbox, FormControlLabel, Button, Stack } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleIngredient } from "../../features/filters/IngredientFilterSlice";
import { ShoppingList } from "../../utils/data";
import { closeAllModals } from "../../features/modal/modalSlice";
import { updateFilter } from "../../features/filters/IngredientFilterSlice";

const IngredientFilterModal: React.FC = () => {
  const dispatch = useDispatch();
  const { itemList, selectedIngredients } = useSelector((store: any) => store.ingredientFilter);

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
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(closeAllModals());
          dispatch(updateFilter());
        }}
      >
        Apply
      </Button>
    </>
  );
};

export default IngredientFilterModal;

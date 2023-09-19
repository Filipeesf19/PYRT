import { Grid, TextField, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import {
  addShoppingItem,
  setCategory,
  setItem,
} from "../../features/Shopping List/shoppingListSlice";
import { closeAllModals } from "../../features/modal/modalSlice";

const AddToShoppingListModal = () => {
  const { item, category } = useSelector((state: any) => state.shoppingList);

  const dispatch = useDispatch();

  return (
    <Grid container spacing={2}>
      <Grid
        item
        sx={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          label="Item Name"
          variant="outlined"
          value={item}
          onChange={(e) => dispatch(setItem(e.target.value))}
        />
      </Grid>
      <Grid
        item
        sx={{
          display: "flex",
          direction: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TextField
          label="Item Category"
          variant="outlined"
          value={category}
          onChange={(e) => dispatch(setCategory(e.target.value))}
        />
      </Grid>
      <Grid item xs={12} display="flex" justifyContent="center">
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            dispatch(addShoppingItem({ item, isNeeded: false, category }));
            dispatch(closeAllModals());
          }}
        >
          Add
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddToShoppingListModal;

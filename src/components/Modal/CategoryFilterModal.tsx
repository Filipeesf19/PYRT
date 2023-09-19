import { Stack, Button } from "@mui/material";
import CategoryFilterBody from "../Home/CategoryFilterBody";
import { closeAllModals } from "../../features/modal/modalSlice";
import { useDispatch } from "react-redux";
import { updateCategoryFilter } from "../../features/filters/CategoryFilterSlice";

const CategoryFilterModal = () => {
  const dispatch = useDispatch();
  return (
    <Stack>
      <CategoryFilterBody />;
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(closeAllModals());
          dispatch(updateCategoryFilter());
        }}
      >
        Apply
      </Button>
    </Stack>
  );
};

export default CategoryFilterModal;

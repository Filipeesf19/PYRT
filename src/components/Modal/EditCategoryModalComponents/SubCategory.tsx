import {
  ListItemText,
  ListItemIcon,
  IconButton,
  Stack,
  TextField,
} from "@mui/material";
import {
  AddRounded,
  EditRounded,
  DeleteRounded,
  CheckRounded,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { openCategoryEditMode } from "../../../features/filters/CategoryFilterSlice";
import { setEditingCategoryInput } from "../../../features/filters/CategoryFilterSlice";
import { submitSubCategoryEdition } from "../../../features/filters/CategoryFilterSlice";

interface Props {
  id: string;
  subCategory: string;
}

const Category: React.FC<Props> = ({ subCategory, id }) => {
  const dispatch = useDispatch();
  const { categoryBeingEdited, editingCategoryInput } = useSelector(
    (state: any) => state.categoryFilter
  );
  return categoryBeingEdited === subCategory ? (
    <>
      <TextField
        fullWidth
        value={editingCategoryInput}
        onChange={(e) => dispatch(setEditingCategoryInput(e.target.value))}
      />
      <IconButton
        edge="start"
        aria-label="save"
        onClick={() => dispatch(submitSubCategoryEdition())}
      >
        <CheckRounded />
      </IconButton>
    </>
  ) : (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      spacing={2}
      sx={{ width: "100%" }}
    >
      <ListItemText
        primary={subCategory}
        sx={{ display: "flex", justifyContent: "start" }}
      />
      <ListItemIcon>
        <IconButton
          edge="start"
          aria-label="edit"
          onClick={() => dispatch(openCategoryEditMode(subCategory))}
        >
          <EditRounded />
        </IconButton>
        <IconButton edge="start" aria-label="delete">
          <DeleteRounded />
        </IconButton>
      </ListItemIcon>
    </Stack>
  );
};

export default Category;

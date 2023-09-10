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
import { submitCategoryEdition } from "../../../features/filters/CategoryFilterSlice";

interface Props {
  id: string;
  category: string;
}

const Category: React.FC<Props> = ({ category, id }) => {
  const dispatch = useDispatch();
  const { categoryBeingEdited, editingCategoryInput } = useSelector(
    (state: any) => state.categoryFilter
  );
  return categoryBeingEdited === category ? (
    <>
      <TextField
        fullWidth
        value={editingCategoryInput}
        onChange={(e) => dispatch(setEditingCategoryInput(e.target.value))}
      />
      <IconButton
        edge="start"
        aria-label="save"
        onClick={() => dispatch(submitCategoryEdition())}
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
        primary={category}
        sx={{ display: "flex", justifyContent: "start" }}
      />
      <ListItemIcon>
        <IconButton edge="start" aria-label="delete">
          <AddRounded />
        </IconButton>
        <IconButton
          edge="start"
          aria-label="edit"
          onClick={() => dispatch(openCategoryEditMode(category))}
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

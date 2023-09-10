import { TextField, IconButton } from "@mui/material";
import { CheckRounded } from "@mui/icons-material";

const SubCategoryEditing: React.FC = ({}) => {
  return (
    <>
      <TextField fullWidth />
      <IconButton edge="start" aria-label="save">
        <CheckRounded />
      </IconButton>
    </>
  );
};

export default SubCategoryEditing;

import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Grid";
import { useState } from "react";

const AddRecipeModal = () => {
  const [rating, setRating] = useState<number | null>(0);

  const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
    setRating(newValue);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField label="Recipe Name" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Category" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Servings" variant="outlined" fullWidth />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Ingredients" variant="outlined" fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <TextField label="Description" variant="outlined" fullWidth multiline />
      </Grid>
      <Grid item xs={12}>
        <Rating name="star-rating" value={rating} onChange={handleRatingChange} precision={1} />
      </Grid>
    </Grid>
  );
};

export default AddRecipeModal;

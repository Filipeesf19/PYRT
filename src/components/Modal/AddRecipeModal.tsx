import React, { useState, useRef } from "react";
import { AddPhotoAlternate } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem"; // Import MenuItem component
import { useDispatch, useSelector } from "react-redux";
import { setRating, setCookingTime } from "../../features/Recipe Setup/addRecipeSlice";
import { Select, Button, Grid, Rating, TextField, Typography } from "@mui/material";

const AddRecipeModal = () => {
  const dispatch = useDispatch();
  const { rating, cookingTime } = useSelector((state: any) => state.addRecipe);

  //Upload image
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileSelect = (event: any) => {
    const selectedFile = event.target.files[0];
    console.log("Selected File:", selectedFile);
  };

  return (
    <form>
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
          <Select
            label="Cooking Time"
            variant="outlined"
            fullWidth
            value={cookingTime}
            onChange={(e) => dispatch(setCookingTime(e.target.value))}
          >
            <MenuItem value="short">Short (&lt;20 mins)</MenuItem>
            <MenuItem value="medium">Medium (20-60 mins)</MenuItem>
            <MenuItem value="long">Long (&gt;60 mins)</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center" gap="10px">
          <Typography>Rating:</Typography>
          <Rating
            name="star-rating"
            value={rating}
            onChange={(_, newValue) => dispatch(setRating(newValue))}
            precision={1}
          />
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center" gap="10px">
          <div>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileSelect}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleButtonClick}
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              Add Photo
              <AddPhotoAlternate />
            </Button>
          </div>
        </Grid>

        <Grid item xs={12}>
          <TextField label="Ingredients" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Description" variant="outlined" fullWidth size="small" />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Create
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddRecipeModal;

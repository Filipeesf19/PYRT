import { useRef } from "react";
import { AddPhotoAlternate, ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import { useDispatch, useSelector } from "react-redux";
import {
  setRating,
  setCookingTime,
  increaseIngredients,
  decreaseIngredients,
  increaseSteps,
  decreaseSteps,
} from "../../features/Recipe Setup/addRecipeSlice";
import {
  Select,
  Button,
  Grid,
  Rating,
  TextField,
  Typography,
  Box,
  IconButton,
} from "@mui/material";

const AddRecipeModal = () => {
  const dispatch = useDispatch();
  const { rating, cookingTime, numberOfIngredients, numberOfSteps } = useSelector(
    (state: any) => state.addRecipe
  );

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
        <Grid item xs={12} display="flex" justifyContent="center" alignItems="center">
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              label="Ingredients"
              value={numberOfIngredients}
              variant="outlined"
              fullWidth
              size="small"
            />
            <Grid container display="flex" justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <IconButton onClick={() => dispatch(increaseIngredients())}>
                  <ArrowDropUp />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <IconButton onClick={() => dispatch(decreaseIngredients())}>
                  <ArrowDropDown />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
          <Box display="flex" justifyContent="center" alignItems="center">
            <TextField
              label="Description"
              value={numberOfSteps}
              variant="outlined"
              fullWidth
              size="small"
              sx={{ textAlign: "center" }}
            />
            <Grid container display="flex" justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <IconButton onClick={() => dispatch(increaseSteps())}>
                  <ArrowDropUp />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <IconButton onClick={() => dispatch(decreaseSteps())}>
                  <ArrowDropDown />
                </IconButton>
              </Grid>
            </Grid>
          </Box>
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

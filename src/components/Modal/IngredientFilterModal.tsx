import React, { useState } from "react";
import { Box, Checkbox, FormControlLabel, Button } from "@mui/material";
import { shoppingList } from "../../utils/data";

const IngredientFilterModal: React.FC = () => {
  // Create a state variable to keep track of selected ingredients
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([]);

  // Function to handle checkbox changes
  const handleIngredientChange =
    (ingredient: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        // If the checkbox is checked, add the ingredient to the selectedIngredients array
        setSelectedIngredients([...selectedIngredients, ingredient]);
      } else {
        // If the checkbox is unchecked, remove the ingredient from the selectedIngredients array
        setSelectedIngredients(selectedIngredients.filter((item) => item !== ingredient));
      }
    };

  // Function to handle the "Apply" button click
  const handleApplyButtonClick = () => {
    // You can perform some action here with the selected ingredients
    console.log("Selected Ingredients:", selectedIngredients);
  };

  return (
    <Box>
      <h1>Ingredients</h1>
      <form>
        {shoppingList.map((shoppingItem, index) => {
          const { item } = shoppingItem;
          return (
            <FormControlLabel
              key={index}
              control={
                <Checkbox
                  checked={selectedIngredients.includes(item)}
                  onChange={handleIngredientChange(item)}
                  color="primary"
                />
              }
              label={item}
            />
          );
        })}
      </form>
      <Button variant="contained" color="primary" onClick={handleApplyButtonClick}>
        Apply
      </Button>
    </Box>
  );
};

export default IngredientFilterModal;

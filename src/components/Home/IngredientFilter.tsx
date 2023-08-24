import { useState } from "react";
import { Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import { ingredients } from "../../utils/data";
import { CustomText1 } from "../../styling/GlobalStyles";

const IngredientFilter: React.FC = () => {
  const [items, setItems] = useState(ingredients);

  const handleCheckboxChange = (id: number) => {
    const updatedIngredients = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(updatedIngredients);
  };

  return (
    <Stack
      sx={{
        padding: { xs: 1, md: 2, lg: 3 },
      }}
      aria-label="ingredient_filter_list"
    >
      <CustomText1>ingredients</CustomText1>
      <FormGroup>
        {items.map((item) => (
          <FormControlLabel
            key={item.id}
            control={
              <Checkbox checked={item.checked} onChange={() => handleCheckboxChange(item.id)} />
            }
            label={item.label}
          />
        ))}
      </FormGroup>
    </Stack>
  );
};

export default IngredientFilter;

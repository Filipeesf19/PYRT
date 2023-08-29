import React from "react";
import { Stack, List, ListItem, ListItemText, Grid } from "@mui/material";
import { CustomText3 } from "../../styling/GlobalStyles";
import { shoppingList } from "../../utils/data";

const NeededShopping: React.FC = () => {
  const categories = shoppingList.map((shoppingList) => shoppingList.category);
  const categoriesUnique = Array.from(new Set(categories));
  return (
    <Stack
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        padding: "10px",
      }}
    >
      <CustomText3 sx={{ textAlign: "center" }}>Needed</CustomText3>

      {categoriesUnique.map((categoryFromArray, index) => {
        console.log("Rendering category:", categoryFromArray);

        return (
          <Grid key={index} container>
            <Grid item xs={2}>
              {categoryFromArray}
            </Grid>
            <Grid item xs={10}>
              <List disablePadding>
                {shoppingList.map((shoppingItem, innerIndex) => {
                  const { isNeeded, item, category } = shoppingItem;
                  if (category == categoryFromArray && isNeeded) {
                    console.log("Rendering shopping item:", item);

                    return (
                      <ListItem disablePadding key={innerIndex}>
                        <ListItemText sx={{ color: "white" }}>{item}</ListItemText>
                      </ListItem>
                    );
                  }
                  return null;
                })}
              </List>
            </Grid>
          </Grid>
        );
      })}
    </Stack>
  );
};

export default NeededShopping;

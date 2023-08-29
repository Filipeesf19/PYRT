import React from "react";
import { Stack, Card, List, ListItem, ListItemText, Grid } from "@mui/material";
import { CustomText3 } from "../../styling/GlobalStyles";
import { shoppingList } from "../../utils/data";

const NeededShopping: React.FC = () => {
  const categories = shoppingList.map((shoppingList) => shoppingList.category);
  const categoriesUnique = Array.from(new Set(categories));
  return (
    <Card>
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
          return (
            <Grid key={index} container>
              <Grid item xs={2} sx={{ textOrientation: "mixed" }}>
                {categoryFromArray}
              </Grid>
              <Grid item xs={10}>
                <List disablePadding>
                  {shoppingList.map((shoppingItem, innerIndex) => {
                    const { isNeeded, item, category } = shoppingItem;
                    if (category == categoryFromArray && isNeeded) {
                      return (
                        <ListItem disablePadding key={innerIndex}>
                          <ListItemText sx={{ color: "white" }}>
                            {item}
                          </ListItemText>
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
    </Card>
  );
};

export default NeededShopping;

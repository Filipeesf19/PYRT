import React from "react";
import { Stack, Box, List, ListItem, ListItemButton, Grid } from "@mui/material";
import { CustomText3 } from "../../styling/GlobalStyles";
import { shoppingList } from "../../utils/data";
import { CustomText4 } from "../../styling/GlobalStyles";
import { SwapHoriz } from "@mui/icons-material";

const NeededShopping: React.FC = () => {
  const categories = shoppingList.map((shoppingList) => shoppingList.category);
  const categoriesUnique = Array.from(new Set(categories));
  return (
    <Stack
      aria-label="Shopping_List_Stack"
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        borderRadius: "5px",
      }}
    >
      <Box
        aria-label="Shopping_List_Header"
        sx={{ display: "flex", alignItems: "center", borderRadius: "5px", padding: "10px" }}
      >
        <CustomText3>Needed</CustomText3>
      </Box>
      <Box bgcolor="common.white" sx={{ width: "100%" }}>
        {categoriesUnique.map((categoryFromArray, index) => {
          return (
            <Grid key={index} container aria-label="Category_Container">
              <Grid
                item
                xs={4}
                aria-label="Category"
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "5px",
                  backgroundColor: "common.white",
                  border: "1px solid grey",
                  borderRadius: "3px",
                }}
              >
                <CustomText4> {categoryFromArray}</CustomText4>
              </Grid>
              <Grid
                item
                aria-label="Item_List_Container"
                xs={8}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "common.white",
                  border: "1px solid grey",
                  borderRadius: "3px",
                }}
              >
                <List disablePadding aria-label="Item_List" sx={{ width: "100%" }}>
                  {shoppingList.map((shoppingItem, innerIndex) => {
                    const { isNeeded, item, category } = shoppingItem;
                    if (category == categoryFromArray && isNeeded) {
                      return (
                        <ListItem
                          disablePadding
                          key={innerIndex}
                          aria-label="Item"
                          sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            padding: "5px",
                            backgroundColor: "common.white",
                            border: "1px solid grey",
                            borderRadius: "3px",
                            textAlign: "center",
                          }}
                        >
                          <CustomText4 aria-label="Item_Text">{item}</CustomText4>
                          <ListItemButton sx={{ position: "absolute", right: "5px", padding: "0" }}>
                            <SwapHoriz />
                          </ListItemButton>
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
      </Box>
    </Stack>
  );
};

export default NeededShopping;

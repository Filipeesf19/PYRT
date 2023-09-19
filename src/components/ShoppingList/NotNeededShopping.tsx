import React from "react";
import { Stack, Box, List, ListItem, ListItemButton, Grid } from "@mui/material";
import { CustomText3 } from "../../styling/GlobalStyles";
import { ShoppingList } from "../../utils/data";
import { CustomText4 } from "../../styling/GlobalStyles";
import { SwapHoriz } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { toggleItem } from "../../features/Shopping List/shoppingListSlice";

const NotNeededShopping: React.FC = () => {
  const dispatch = useDispatch();

  const { itemList, uniqueCategories } = useSelector((store: any) => store.shoppingList);

  const categories: string[] = itemList.map((shoppingList: ShoppingList) => shoppingList.category);
  const categoriesUnique: string[] = Array.from(new Set(categories));
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
        <CustomText3>Not Needed</CustomText3>
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
                  {itemList.map((shoppingItem: ShoppingList, innerIndex: number) => {
                    const { isNeeded, item, category } = shoppingItem;
                    if (category == categoryFromArray && !isNeeded) {
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
                            position: "relative",
                          }}
                        >
                          <CustomText4 aria-label="Item_Text">{item}</CustomText4>
                          <ListItemButton
                            sx={{ position: "absolute", right: "5px", padding: "0" }}
                            onClick={() => dispatch(toggleItem(shoppingItem.item))}
                          >
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

export default NotNeededShopping;

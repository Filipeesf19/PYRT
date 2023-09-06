import React from "react";
import { Box, Grid } from "@mui/material";
import ShoppingHeader from "../components/ShoppingList/ShoppingHeader";
import NeededShopping from "../components/ShoppingList/NeededShopping";
import NotNeededShopping from "../components/ShoppingList/NotNeededShopping";
import ModalMain from "../components/Modal/ModalMain";
import { useSelector } from "react-redux";
import AddToShoppingListModal from "../components/Modal/AddToShoppingListModal";

const ShoppingList: React.FC = () => {
  const { isAddToShoppingListModalOpen } = useSelector((store: any) => store.modal);

  return (
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", padding: "0 15px" }}>
      <ModalMain>{isAddToShoppingListModalOpen && <AddToShoppingListModal />}</ModalMain>
      <Box sx={{ minWidth: { xs: "100%", md: "70%" } }}>
        <Grid container spacing={2}>
          <Grid xs={12} item>
            <ShoppingHeader />
          </Grid>
          <Grid xs={6} item>
            <NeededShopping />
          </Grid>
          <Grid xs={6} item>
            <NotNeededShopping />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ShoppingList;

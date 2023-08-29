import React from "react";
import { Box, Typography } from "@mui/material";
import { CustomIconButton1, CustomText3 } from "../../styling/GlobalStyles";
import { AddCircle } from "@mui/icons-material";

const ShoppingHeader: React.FC = () => {
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "primary.main",
        padding: "10px",
      }}
    >
      <CustomText3 sx={{ textAlign: "center" }}>Shopping List</CustomText3>
      <CustomIconButton1
        aria-label="add_category"
        sx={{ position: "absolute", right: "20px", padding: "0" }}
      >
        <AddCircle />
      </CustomIconButton1>
    </Box>
  );
};

export default ShoppingHeader;

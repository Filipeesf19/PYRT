import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { EditRounded, FilterAlt } from "@mui/icons-material";
import { CustomIconButton1, CustomText1 } from "../../styling/GlobalStyles";
import { useGlobalContext } from "../../context/GlobalContext";
import { useDispatch } from "react-redux";
import { openEditCategoryModal, openCategoryFilterModal } from "../../features/modal/modalSlice";
import CategoryFilterBody from "./CategoryFilterBody";
import { useSelector } from "react-redux";

const CategoryFilter: React.FC = () => {
  const dispatch = useDispatch();

  const { filteredCategory } = useSelector((state: any) => state.categoryFilter);

  const { isExtraSmallScreen, isSmallScreen } = useGlobalContext();

  return (
    <Stack sx={{ padding: { xs: "1rem 1rem 0 1rem", md: "1rem 2rem 1rem 2rem" } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <CustomText1 sx={{ paddingTop: "8px" }}>categories</CustomText1>
        <Stack direction="row">
          <CustomIconButton1
            aria-label="icon_category"
            onClick={() => dispatch(openEditCategoryModal())}
          >
            <EditRounded />
          </CustomIconButton1>

          {(isExtraSmallScreen || isSmallScreen) && (
            <CustomIconButton1
              aria-label="Filter_category"
              onClick={() => dispatch(openCategoryFilterModal())}
            >
              <FilterAlt />
            </CustomIconButton1>
          )}
        </Stack>
      </Box>
      {!isExtraSmallScreen && !isSmallScreen && <CategoryFilterBody />}
      {(isExtraSmallScreen || isSmallScreen) && (
        <Typography sx={{ textAlign: "center" }}>{filteredCategory}</Typography>
      )}
    </Stack>
  );
};

export default CategoryFilter;

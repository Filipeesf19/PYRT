import { useState, Fragment } from "react";
import { List, ListItemButton, ListItem, Collapse, Box, Stack } from "@mui/material";
import { ExpandLess, ExpandMore, EditRounded, FilterAlt } from "@mui/icons-material";
import { filterCategories } from "../../utils/data";
import { CustomIconButton1, CustomText1, CustomTextList1 } from "../../styling/GlobalStyles";
import { useGlobalContext } from "../../context/GlobalContext";
import { useDispatch } from "react-redux";
import { openEditCategoryModal, openCategoryFilterModal } from "../../features/modal/modalSlice";

const CategoryFilter: React.FC = () => {
  const dispatch = useDispatch();

  const { isExtraSmallScreen, isSmallScreen } = useGlobalContext();

  const [openCategory, setOpenCategory] = useState<string>("");

  const handleClick = (category: string) => {
    if (openCategory === category) {
      setOpenCategory("");
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <Box sx={{ padding: { xs: "1rem 1rem 0 1rem", md: "1rem 2rem 1rem 2rem" } }}>
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
      <List aria-labelledby="nested-list-subheader">
        {!isExtraSmallScreen &&
          !isSmallScreen &&
          filterCategories.map((categoryData, index) => (
            <Fragment key={index}>
              {categoryData?.subCategories ? (
                <ListItemButton
                  onClick={() => handleClick(categoryData.category)}
                  sx={{ padding: "0" }}
                >
                  <CustomTextList1 primary={categoryData.category} />
                  {openCategory === categoryData.category ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              ) : (
                <ListItem disablePadding>
                  <CustomTextList1 primary={categoryData.category} />
                </ListItem>
              )}
              {categoryData.subCategories && (
                <Collapse in={openCategory === categoryData.category} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {categoryData.subCategories.map((item, itemIndex) => (
                      <ListItemButton key={itemIndex}>
                        <CustomTextList1 primary={item} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Fragment>
          ))}
      </List>
    </Box>
  );
};
export default CategoryFilter;

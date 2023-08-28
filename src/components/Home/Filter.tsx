import { useState, Fragment } from "react";
import {
  List,
  ListItemButton,
  ListItem,
  Collapse,
  Box,
  Stack,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  AddCircleRounded,
  EditRounded,
  DeleteRounded,
  FilterAlt,
} from "@mui/icons-material";
import { filterCategories } from "../../utils/data";
import {
  CustomIconButton1,
  CustomText1,
  CustomTextList1,
} from "../../styling/GlobalStyles";
import { useGlobalContext } from "../../context/GlobalContext";

const Filter: React.FC = () => {
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
    <Box
      sx={{ padding: { xs: "1rem 1rem 0 1rem", md: "1rem 2rem 1rem 2rem" } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "column", md: "column", lg: "row" },
        }}
      >
        <CustomText1 sx={{ paddingTop: "8px" }}>categories</CustomText1>
        <Stack direction="row">
          <CustomIconButton1 aria-label="delete_category">
            <DeleteRounded />
          </CustomIconButton1>
          <CustomIconButton1 aria-label="icon_category">
            <EditRounded />
          </CustomIconButton1>
          <CustomIconButton1 aria-label="add_category">
            <AddCircleRounded />
          </CustomIconButton1>
          {(isExtraSmallScreen || isSmallScreen) && (
            <CustomIconButton1 aria-label="Filter_category">
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
              {categoryData.subCategory ? (
                <ListItemButton
                  onClick={() => handleClick(categoryData.category)}
                  sx={{ padding: "0" }}
                >
                  <CustomTextList1 primary={categoryData.category} />
                  {openCategory === categoryData.category ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItemButton>
              ) : (
                <ListItem disablePadding>
                  <CustomTextList1 primary={categoryData.category} />
                </ListItem>
              )}
              {categoryData.subCategory && (
                <Collapse
                  in={openCategory === categoryData.category}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {categoryData.subCategory.map((item, itemIndex) => (
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
export default Filter;

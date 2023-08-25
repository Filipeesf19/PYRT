import { useState, Fragment } from "react";
import { List, ListItemButton, ListItem, Collapse, Box, Stack } from "@mui/material";
import { ExpandLess, ExpandMore, AddCircle, Edit, Delete } from "@mui/icons-material";
import { filterCategories } from "../../utils/data";
import { CustomIconButton1, CustomText1, CustomTextList1 } from "../../styling/GlobalStyles";

const Filter: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string>("");

  const handleClick = (category: string) => {
    if (openCategory === category) {
      setOpenCategory("");
    } else {
      setOpenCategory(category);
    }
  };

  return (
    <List
      component="div"
      aria-labelledby="nested-list-subheader"
      sx={{ padding: { xs: 1, md: 2, lg: 3 } }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: { xs: "row", md: "column", lg: "row" },
        }}
      >
        <CustomText1>categories</CustomText1>
        <Stack direction="row">
          <CustomIconButton1 aria-label="delete_category">
            <Delete />
          </CustomIconButton1>
          <CustomIconButton1 aria-label="icon_category">
            <Edit />
          </CustomIconButton1>
          <CustomIconButton1 aria-label="add_category">
            <AddCircle />
          </CustomIconButton1>
        </Stack>
      </Box>
      {filterCategories.map((categoryData, index) => (
        <Fragment key={index}>
          {categoryData.subCategory ? (
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
          {categoryData.subCategory && (
            <Collapse in={openCategory === categoryData.category} timeout="auto" unmountOnExit>
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
  );
};
export default Filter;

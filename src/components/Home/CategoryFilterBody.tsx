import React, { Fragment } from "react";
import {
  List,
  ListItemButton,
  ListItem,
  Collapse,
  Box,
  Stack,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { filterCategories } from "../../utils/data";
import { CustomTextList1 } from "../../styling/GlobalStyles";
import { useGlobalContext } from "../../context/GlobalContext";
import { useDispatch } from "react-redux";
import { setSelectedCategory, setOpenCategory } from "../../features/filters/CategoryFilterSlice";
import { useSelector } from "react-redux";

const CategoryFilterBody: React.FC = () => {
  const dispatch = useDispatch();

  const { selectedCategory, openCategory } = useSelector((state: any) => state.categoryFilter);

  const { isExtraSmallScreen, isSmallScreen } = useGlobalContext();

  return (
    <RadioGroup
      aria-label="category"
      name="category"
      value={selectedCategory}
      onChange={(event) => dispatch(setSelectedCategory(event.target.value))}
    >
      <List aria-labelledby="nested-list-subheader">
        {!isExtraSmallScreen &&
          !isSmallScreen &&
          filterCategories.map((categoryData, index) => (
            <Fragment key={index}>
              {categoryData?.subCategories ? (
                <ListItemButton
                  onClick={() => dispatch(setOpenCategory(categoryData.category))}
                  sx={{ padding: "0" }}
                >
                  <FormControlLabel
                    value={categoryData.category}
                    control={<Radio />} // Use Radio here
                    label={<CustomTextList1 primary={categoryData.category} />}
                  />
                  {openCategory === categoryData.category ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              ) : (
                <ListItem disablePadding>
                  <FormControlLabel
                    value={categoryData.category}
                    control={<Radio />} // Use Radio here
                    label={<CustomTextList1 primary={categoryData.category} />}
                  />
                </ListItem>
              )}
              {categoryData.subCategories && (
                <Collapse in={openCategory === categoryData.category} timeout="auto" unmountOnExit>
                  <List disablePadding>
                    {categoryData.subCategories.map((item, itemIndex) => (
                      <ListItemButton key={itemIndex}>
                        <FormControlLabel
                          value={item}
                          control={<Radio />} // Use Radio here
                          label={<CustomTextList1 primary={item} />}
                        />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              )}
            </Fragment>
          ))}
      </List>
    </RadioGroup>
  );
};

export default CategoryFilterBody;

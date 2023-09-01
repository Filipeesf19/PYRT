import React from "react";
import { recipes } from "../utils/data";
import { Grid, Stack, Box, List, Typography, ListItem, ListItemText } from "@mui/material";
import { singlePageLinks } from "../utils/data";
import { Link } from "react-router-dom";
import { Circle } from "@mui/icons-material";

const SingleRecipe: React.FC = () => {
  const { img, title, description } = recipes[0];

  return (
    <Stack direction={{ xs: "column", sm: "row" }} bgcolor="Background.paper">
      <Box>
        <List
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "row", sm: "column" },
          }}
        >
          {singlePageLinks.map((link, index) => {
            const { url, text } = link;
            return (
              <ListItem
                disablePadding
                component={Link}
                key={index}
                to={url}
                sx={{ padding: "10px", textAlign: "center" }}
              >
                <ListItemText primary={text} />
              </ListItem>
            );
          })}
        </List>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Grid container>
          <Grid aria-label="Image" item xs={12} sm={6}>
            <img src={img} alt={title} style={{ maxWidth: "100%", height: "auto" }} />
          </Grid>
          <Grid aria-label="Ingredients" item xs={12} sm={6}>
            <Typography>Ingredients</Typography>
            <List>
              {recipes[0].ingredients.map((item, index) => {
                const { ingredient, qty } = item;
                return (
                  <ListItem key={index} disablePadding>
                    <Circle style={{ fontSize: "15px", paddingRight: "5px" }} />
                    <ListItemText>
                      {qty} {ingredient}
                    </ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Grid aria-label="Description" item xs={12}>
            <Typography>Description</Typography>
            <Typography>{description}</Typography>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  );
};

export default SingleRecipe;

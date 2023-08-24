import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";

interface Recipe {
  img: string;
  title: string;
}

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Card sx={{ position: "relative", margin: "5px" }} aria-label="Recipe_Card">
      <CardMedia
        component="img"
        image={recipe.img}
        alt={recipe.title}
        aria-label="Recipe_Image"
        height="150px"
      />
      <CardContent
        aria-label="Recipe-Title-Container"
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          background: "rgba(0, 0, 0, 0.5)",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "5px",
          "&:last-child": { paddingBottom: "5px" },
        }}
      >
        <Typography fontSize="16px" noWrap component="div" aria-label="Recipe-Title">
          {recipe.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;

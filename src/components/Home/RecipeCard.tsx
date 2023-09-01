import React from "react";
import { Card, CardMedia, CardContent, Typography, ButtonBase } from "@mui/material";
import { Link } from "react-router-dom";

interface Recipe {
  img: string;
  title: string;
}

interface Props {
  recipe: Recipe;
}

const RecipeCard: React.FC<Props> = ({ recipe }) => {
  return (
    <Card
      sx={{
        position: "relative",
        margin: "5px",
        maxWidth: "150px", // Set a maximum width for the card
      }}
      aria-label="Recipe_Card"
    >
      <Link to={`recipes/${recipe.title}`}>
        <ButtonBase
          sx={{
            "&:hover": {
              "& .underline-text": {
                textDecoration: "underline", // Apply underline when hovering
              },
            },
          }}
        >
          <CardMedia
            component="img"
            image={recipe.img}
            alt={recipe.title}
            aria-label="Recipe_Image"
            sx={{
              height: { xs: "75px", sm: "100px", lg: "150px" },
            }}
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
            <Typography
              fontSize="16px"
              noWrap
              component="div"
              aria-label="Recipe-Title"
              className="underline-text" // Add a class to identify the text for styling
            >
              {recipe.title}
            </Typography>
          </CardContent>
        </ButtonBase>
      </Link>
    </Card>
  );
};

export default RecipeCard;

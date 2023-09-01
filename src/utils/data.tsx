import { Home, ShoppingCart, Settings, Login } from "@mui/icons-material";
import React from "react";

/* ====NAVIGATION LINKS==== */
type navLink = {
  url: string;
  text: string;
  icon: React.ReactNode;
};

export const navLinks: navLink[] = [
  {
    url: "/",
    text: "home",
    icon: <Home />,
  },
  {
    url: "shopping_list",
    text: "shopping List",
    icon: <ShoppingCart />,
  },
  {
    url: "settings",
    text: "settings",
    icon: <Settings />,
  },
  {
    url: "login",
    text: "login",
    icon: <Login />,
  },
];

/* ====FILTER CATEGORIES==== */

interface Category {
  category: string;
  subCategory?: string[];
}

export const filterCategories: Category[] = [
  { category: "Breakfast", subCategory: ["Smoothies", "Toasts"] },
  { category: "Deserts" },
  { category: "Lunch", subCategory: ["fish"] },
];

/* ====RECIPES==== */

interface Recipe {
  img: string;
  title: string;
  ingredients: { qty: string; ingredient: string }[];
  description: string;
}

export const recipes: Recipe[] = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
];

/* ==== Ingredient Filter ==== */

interface Ingredient {
  id: number;
  label: string;
}

export const ingredients: Ingredient[] = [
  { id: 1, label: "salmon" },
  { id: 2, label: "rice" },
  { id: 3, label: "pasta" },
];

/* ====WEEK RECIPES==== */

export const weekRecipes: Recipe[] = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",

    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
];

/* ====DAY RECIPES==== */

export const dayRecipes: Recipe[] = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    ingredients: [
      {
        qty: "100g",
        ingredient: "rice",
      },
      {
        qty: "100g",
        ingredient: "rice",
      },
    ],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tenetur hic ea maxime ut atque, qui voluptatibus minima dolorem quibusdam voluptatem rem tempore provident! Dolor consectetur placeat quo doloribus, minus odio officia iure nostrum eligendi. Quidem, doloremque ab, consectetur ratione minus amet ex ullam tenetur facere expedita dolorum quas recusandae.",
  },
];

/* ====SHOPPING LIST==== */

interface ShoppingList {
  item: string;
  isNeeded: boolean;
  category: string;
}

export const shoppingList: ShoppingList[] = [
  {
    item: "banana",
    isNeeded: false,
    category: "fruit",
  },
  {
    item: "apple",
    isNeeded: true,
    category: "fruit",
  },
  {
    item: "potato",
    isNeeded: true,
    category: "vegetables",
  },
  {
    item: "lettuce",
    isNeeded: true,
    category: "vegetables",
  },
  {
    item: "kale",
    isNeeded: false,
    category: "vegetables",
  },
  {
    item: "orange",
    isNeeded: true,
    category: "fruit",
  },
  {
    item: "detergent",
    isNeeded: true,
    category: "housekeeping",
  },
  {
    item: "dishwasher liquid",
    isNeeded: false,
    category: "housekeeping",
  },
  {
    item: "chicken",
    isNeeded: false,
    category: "meat",
  },
  {
    item: "white fish",
    isNeeded: false,
    category: "fish",
  },
  {
    item: "rice",
    isNeeded: false,
    category: "cereals",
  },
];

/* ====FILTER CATEGORIES==== */

export const singlePageLinks: navLink[] = [
  {
    url: "/",
    text: "back",
    icon: <Home />,
  },
  {
    url: "/",
    text: "add to plan",
    icon: <ShoppingCart />,
  },
  {
    url: "/",
    text: "share",
    icon: <Settings />,
  },
  {
    url: "/",
    text: "edit",
    icon: <Login />,
  },
];

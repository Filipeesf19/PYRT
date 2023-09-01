import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import ShoppingList from "./pages/ShoppingList";
import Settings from "./pages/Settings";
import Login from "./pages/Login";
import { ThemeProvider } from "@mui/material";
import theme from "./styling/customThemes"; // Import the custom theme you created
import "./index.css";
import SingleRecipe from "./pages/SingleRecipe";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shopping_list" element={<ShoppingList />} />
          <Route path="settings" element={<Settings />} />
          <Route path="login" element={<Login />} />
          <Route path="recipes/:title" element={<SingleRecipe />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;

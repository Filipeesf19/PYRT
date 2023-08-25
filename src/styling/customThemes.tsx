import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007bff", // Customize the primary color
    },
    secondary: {
      main: "#c9c9c9", // Customize the secondary color
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1250,
      xl: 1536,
    },
  },
});

export default theme;

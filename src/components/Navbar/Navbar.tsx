import { navLinks } from "../../utils/data";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          PYRT
        </Typography>
        <Stack direction="row" spacing={3}>
          {navLinks.map((link, index) => {
            const { url, text } = link;
            return (
              <Typography
                variant="body1"
                component={Link}
                key={index}
                to={url}
                sx={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "16px",
                  textTransform: "uppercase",
                }}
              >
                {text}
              </Typography>
            );
          })}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

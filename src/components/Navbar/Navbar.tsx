import { navLinks } from "../../utils/data";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  IconButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { NavbarItem, SidebarItem } from "../../styling/GlobalStyles";
import { useGlobalContext } from "../../context/GlobalContext";

const Navbar: React.FC = () => {
  const { isExtraSmallScreen } = useGlobalContext();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event &&
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderNavigation = () => {
    if (isExtraSmallScreen) {
      return (
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
          <Menu />
        </IconButton>
      );
    } else {
      return (
        <List sx={{ display: "flex", gap: "10px", whiteSpace: "nowrap" }}>
          {navLinks.map((link, index) => {
            const { url, text } = link;
            return (
              <ListItem component={Link} key={index} to={url}>
                <NavbarItem primary={text} />
              </ListItem>
            );
          })}
        </List>
      );
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PYRT
          </Typography>
          {renderNavigation()}
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        <List sx={{ padding: "20px" }}>
          <Typography variant="h5" component="div" sx={{ textAlign: "center", padding: "20px" }}>
            Menu
          </Typography>
          {navLinks.map((link, index) => {
            const { url, text, icon } = link;
            return (
              <>
                <ListItem
                  disablePadding
                  component={Link}
                  key={index}
                  to={url}
                  sx={{ padding: "10px" }}
                >
                  <ListItemIcon>{icon}</ListItemIcon>
                  <SidebarItem primary={text} onClick={toggleDrawer(false)} />
                </ListItem>
                <Divider />
              </>
            );
          })}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;

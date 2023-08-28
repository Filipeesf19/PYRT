import { createContext, useContext } from "react";
import { useMediaQuery, useTheme } from "@mui/material"; // Import necessary components

const AppContext = createContext<any>({});

interface Props {
  children: React.ReactNode;
}

export const AppProvider: React.FC<Props> = ({ children }) => {
  const theme = useTheme(); // Fetch the theme object
  const isExtraSmallScreen = useMediaQuery(theme.breakpoints.down("sm")); // Check for small screens
  const isSmallScreen = useMediaQuery(theme.breakpoints.between("sm", "md")); // Check for medium screens
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("md", "lg")); // Check for medium screens
  const isLargeScreen = useMediaQuery(theme.breakpoints.between("lg", "xl")); // Check for large screens

  return (
    <AppContext.Provider
      value={{
        isExtraSmallScreen,
        isSmallScreen,
        isMediumScreen,
        isLargeScreen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

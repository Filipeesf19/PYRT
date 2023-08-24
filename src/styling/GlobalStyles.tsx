import { styled } from "@mui/material/styles";
import { Button, Typography, IconButton, ListItemText } from "@mui/material";

/*------------------------
-----------TEXT-----------
/*------------------------*/

export const CustomText1 = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  color: theme.palette.text.primary,
  textTransform: "capitalize",
  textAlign: "center",
  [theme.breakpoints.down("xs")]: { fontSize: "15px" },
  [theme.breakpoints.between("sm", "md")]: { fontSize: "18px" },
  [theme.breakpoints.between("md", "lg")]: { fontSize: "18px" },
  [theme.breakpoints.between("lg", "xl")]: { fontSize: "18px" },
  [theme.breakpoints.up("xl")]: { fontSize: "20px" },
}));

export const CustomText2 = styled(Typography)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  color: theme.palette.common.white,
  textTransform: "capitalize",
  textAlign: "center",
  [theme.breakpoints.down("xs")]: { fontSize: "15px" },
  [theme.breakpoints.between("sm", "md")]: { fontSize: "18px" },
  [theme.breakpoints.between("md", "lg")]: { fontSize: "18px" },
  [theme.breakpoints.between("lg", "xl")]: { fontSize: "18px" },
  [theme.breakpoints.up("xl")]: { fontSize: "20px" },
}));

/*------------------------
-----------BUTTONS-----------
/*------------------------*/

export const CustomButton1 = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  padding: "10px 20px",
  borderRadius: "4px",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

export const CustomButton2 = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  fontFamily: "Arial, sans-serif",
  width: "100px",
  height: "100px",
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

/*------------------------
-----------ICON BUTTON-----------
/*------------------------*/

export const CustomIconButton1 = styled(IconButton)(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  color: theme.palette.primary.main,
  borderRadius: "50%",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
  [theme.breakpoints.down("xs")]: { size: "small" },
  [theme.breakpoints.between("sm", "md")]: { size: "small" },
  [theme.breakpoints.between("md", "lg")]: { size: "small" },
  [theme.breakpoints.between("lg", "xl")]: { size: "small" },
  [theme.breakpoints.up("xl")]: { size: "small" },
}));

/*------------------------
---------LIST TEXT---------
/*------------------------*/

export const CustomTextList1 = styled(ListItemText)(({ theme }) => ({
  fontFamily: "Arial, sans-serif",
  color: theme.palette.text.primary,
  [theme.breakpoints.down("xs")]: { fontSize: "8px" },
  [theme.breakpoints.between("sm", "md")]: { fontSize: "10px" },
  [theme.breakpoints.between("md", "lg")]: { fontSize: "10px" },
  [theme.breakpoints.between("lg", "xl")]: { fontSize: "10px" },
  [theme.breakpoints.up("xl")]: { fontSize: "15px" },
}));

/**
 * @file theme.js
 * @author Devin Arena
 * @description Handles the theme for the web server.
 * @since 5/17/2022
 **/

import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0078a3",
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
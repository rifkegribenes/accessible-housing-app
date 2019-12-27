import { createMuiTheme } from "@material-ui/core/styles";
import red from "@material-ui/core/colors/red";
import green from "@material-ui/core/colors/green";

export const theme = {
  palette: {
    primary: {
      main: "#9f2c2c", // brick red
      light: "#a94400" // medium brick
    },
    secondary: {
      main: "#c77137", // orange
      light: "#d3a900" // yellow
    },
    danger: {
      main: red[900], // #b71c1c
      light: red[700] // #d32f2f
    },
    success: {
      main: green[600], // #43A047
      light: green[400] // #66BB6A
    },
    textColor: "#333", // dark gray
    secondaryTextColor: "#9f2c2c", // brick red
    bodyBackground: "#fff", // white
    type: "light"
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 600,
      lg: 960,
      xl: 1280
    }
  },
  typography: {
    useNextVariants: true,
    fontFamily: [
      '"Source Sans Pro"',
      '"Helvetica Neue"',
      "Helvetica",
      "Arial",
      "sans-serif"
    ].join(",")
  },
  overrides: {
    MuiMenu: {
      paper: {
        position: "absolute",
        top: "60px !important",
        borderTop: "1px solid white",
        // right: "320px !important",
        left: "0 !important",
        width: "200px !important",
        borderRadius: "0 !important",
        // bottom: "0 !important",
        // maxHeight: "calc(100vh - 109px) !important",
        filter: "none !important"
      }
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        fontFamily: [
          '"Source Sans Pro"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif"
        ].join(","),
        fontWeight: 400,
        textDecoration: "none"
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          "&$focused": {
            color: "secondary"
          }
        }
      }
    },
    "MuiButton-outlinedSecondary": {
      border: 2
    },
    MuiTypography: {
      root: {
        fontFamily: [
          '"Source Sans Pro"',
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif"
        ].join(",")
      }
    }
  }
};
export default createMuiTheme(theme);

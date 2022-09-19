import { createTheme, ThemeProvider, responsiveFontSizes  } from "@mui/material/styles";

let globalTheme = createTheme();
globalTheme = responsiveFontSizes(globalTheme);


 export const themes = [
    createTheme({
      ...globalTheme,
      palette: {
        primary: {
          main: "#13678A",
        },
        secondary: {
          main: "#45C4B0",
        },
        background: {
          default: "#fff",
        },
        text: {
          default: "#000",
        },
      },
    }),
    createTheme({
      ...globalTheme,
      palette: {
        primary: {
          main: "#80CC66",
        },
        secondary: {
          main: "#00AB5B",
        },
        background: {
          default: "#2E3333",
        },
        text: {
          default: "#00AB5B",
        },
      },
    }),
    createTheme({
      ...globalTheme,
      palette: {
        primary: {
          main: "#498EB3",
        },
        secondary: {
          main: "#498EB3",
        },
        background: {
          default: "#A6D3EA",
        },
        text: {
          default: "#495C66",
        },
      },
    }),
    createTheme({
      ...globalTheme,
      palette: {
        primary: {
          main: "#D17E13",
        },
        secondary: {
          main: "#2B94FF",
        },
        background: {
          default: "#E6DDCB",
        },
        text: {
          default: "#819FA6",
        },
      },
    }),
    createTheme({
      ...globalTheme,
      palette: {
        primary: {
          main: "#FF0000",
        },
        secondary: {
          main: "#FF0000",
        },
        background: {
          default: "#fff",
        },
        text: {
          default: "#000",
        },
      },
    }),
    createTheme({
      ...globalTheme,
      palette: {
        primary: {
          main: "#021E73",
        },
        secondary: {
          main: "#9BCAF2",
        },
        background: {
          default: "#F2C791",
        },
        text: {
          default: "#021E73",
        },
      },
    }),
  ];
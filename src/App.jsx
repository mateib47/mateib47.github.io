import { Topbar, Menu, Sidebar, Home, Programming, PublicSpeak } from "./components";
import "./app.scss";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@mui/material/Container";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState([
    "Home",
    "About",
    "Portofolio",
    "Works",
    "Testimonials",
    "Contact",
  ]);
  const [theme, _setTheme] = useState(0);
  const setTheme = (theme) => {
    localStorage.setItem("Theme", theme);
    _setTheme(theme);
  };

  useEffect(() => {
    let theme = localStorage.getItem("Theme");
    if(theme){
      _setTheme(theme)
    }
  }, []);

  const themes = [
    createTheme({
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
      palette: {
        primary: {
          main: "#FFFE00",
        },
        secondary: {
          main: "#2B94FF",
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
  ];

  //update sections of topbar menu
  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />

      <Router>
        <div className="app">
          <Topbar open={menuOpen} setOpen={setMenuOpen} setTheme={setTheme} theme={theme} />
          <Sidebar />
          <Menu open={menuOpen} setOpen={setMenuOpen} items={items} />
          <Container
            className="sections"
            sx={{ backgroundColor: "background.default" }}
            maxWidth="xl"
          >
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home setItems={setItems} />} />
              <Route
                path="/programming"
                element={<Programming setItems={setItems} />}
              />
              <Route
                path="/public%20speaking"
                element={<PublicSpeak setItems={setItems} />}
              />
            </Routes>
          </Container>
        </div>
      </Router>
    </ThemeProvider>
  );
};

// const Pages = () => {
//   let routes =   useRoutes([
//     { path: "/", element: <Home /> },
//     { path: "/home", element: <Home /> },
//     { path: "/programming", element: <Programming /> },
//   ]);
//   return routes
// }

export default App;

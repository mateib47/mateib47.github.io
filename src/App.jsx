import {
  Topbar,
  Menu,
  Sidebar,
  Home,
  Programming,
  PublicSpeak,
  Negotiation,
  Sports,
  Entrepreneurship,
} from "./components";
import "./app.scss";
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
  useLocation,
} from "react-router-dom";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@mui/material/Container";
import { themes } from "./themes";
import { siteModesRaw } from "./data";

const App = () => {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    setTheme(siteModesRaw.indexOf(pathname.slice(1)));
  }, [pathname]);

  const [menuOpen, setMenuOpen] = useState(false);
  const [items, setItems] = useState([
    "Intro",
    "About",
    "Experience",
    "Highlights",
    "Contact",
  ]);
  const [theme, setTheme] = useState(0);

  //update sections of topbar menu
  return (
    <>
      <ThemeProvider theme={themes[theme]}>
        <CssBaseline />
        <div className="app">
          <Topbar open={menuOpen} setOpen={setMenuOpen} theme={theme} />
          <Sidebar />
          <Menu open={menuOpen} setOpen={setMenuOpen} items={items} />
          <Container
            className="sections"
            sx={{ backgroundColor: "background.default" }}
            maxWidth={false}
          >
            <Routes>
              <Route path="/" element={<Home setItems={setItems} />} />
              <Route
                path="/programming"
                element={<Programming setItems={setItems} />}
              />
              <Route
                path="/public%20speaking"
                element={<PublicSpeak setItems={setItems} />}
              />
              <Route
                path="/negotiation"
                element={<Negotiation setItems={setItems} />}
              />
              <Route path="/sports" element={<Sports setItems={setItems} />} />
              <Route
                path="/entrepreneurship"
                element={<Entrepreneurship setItems={setItems} />}
              />
            </Routes>
          </Container>
        </div>
      </ThemeProvider>
    </>
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

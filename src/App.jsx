import { Topbar, Menu, Sidebar, Home, Programming } from "./components";
import "./app.scss";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@material-ui/core/CssBaseline";


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
  const [theme, setTheme] = useState(0);
  console.log(theme)


  const themes = [createTheme({
    palette: {
      primary: {
        main: "#13678A",
      },
      secondary: {
        main: "#45C4B0",
      },
      background:{
        default:'#fff'
      }
    },
  }),createTheme({
    palette: {
      primary: {
        main: "#80CC66",
      },
      secondary: {
        main: "#00AB5B",
      },
      background:{
        default:'#2E3333'
      }
    },
  })]

  //update sections of topbar menu
  return (
    <ThemeProvider theme={themes[theme]}>
      <CssBaseline />

      <Router>
        <div className="app">
          <Topbar open={menuOpen} setOpen={setMenuOpen} setTheme={setTheme} />
          <Sidebar />
          <Menu open={menuOpen} setOpen={setMenuOpen} items={items} />
          <div className="sections">
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<Home setItems={setItems} />} />
              <Route
                path="/programming"
                element={<Programming setItems={setItems} />}
              />
            </Routes>
          </div>
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

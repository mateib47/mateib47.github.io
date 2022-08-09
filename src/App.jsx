import {
  Intro,
  Topbar,
  Works,
  Portofolio,
  Testimonials,
  Contact,
  Menu,
  About,
  Network,
  Sidebar,
  Home,
  Programming,
} from "./components";
import "./app.scss";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  Navigate,
} from "react-router-dom";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  //update sections of topbar menu
  return (
    <Router>
      <div className="app">
        <Topbar open={menuOpen} setOpen={setMenuOpen} />
        <Sidebar />
        <Menu open={menuOpen} setOpen={setMenuOpen} />
        <div className="sections">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/programming" element={<Programming />} />
          </Routes>
        </div>
      </div>
    </Router>
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

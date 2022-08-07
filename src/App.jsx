import React from "react";
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
} from "./components";
import "./app.scss";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //update sections of topbar menu
  return (
    <Router>
      <div className="app">
        <Topbar open={menuOpen} setOpen={setMenuOpen} />
        <Sidebar />
        <Menu open={menuOpen} setOpen={setMenuOpen} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="sections">
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

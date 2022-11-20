import React, { useEffect, Fragment } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const root = document.getElementById("root");
    setTimeout(function () {
      root.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    }, 20);
  }, [pathname]);

  return null;
}

export default ScrollToTop;

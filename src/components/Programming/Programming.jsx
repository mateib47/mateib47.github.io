import React from "react";
import Portofolio from "./Portofolio/Portofolio";
import Languages from "./Languages/Languages";
import { useEffect } from "react";
import Home from "./Home";

const Programming = ({ setItems }) => {
  useEffect(() => {
    setItems(["Languages", "Portofolio"]);
  }, []);

  return (
    <>
      <Home />
      <Languages />
      <Portofolio />
    </>
  );
};

export default Programming;

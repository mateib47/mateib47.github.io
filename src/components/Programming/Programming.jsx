import React from "react";
import Portfolio from "./Portfolio/Portfolio";
import Languages from "./Languages/Languages";
import { useEffect } from "react";
import Home from "../Utils/Home";
import HorizontalBars from "../Utils/HorizontalBars";
import { certifications } from "../../data";

const Programming = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Languages", "Portfolio", "Certifications"]);
  }, []);

  return (
    <>
      <Home
        image={"programming.png"}
        header="Web developer"
        text={
          "I love the challenge of building something from scratch and seeing it come to life on the screen. I also enjoy the satisfaction of solving problems and creating something that makes people's lives easier."
        }
      />
      <Languages />
      <Portfolio />
      <HorizontalBars id="certifications" data={certifications} title="Certifications" />
    </>
  );
};

export default Programming;

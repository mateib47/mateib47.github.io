import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Boxes from "../Utils/Boxes";
import Carousel from "../Utils/Carousel/Carousel";
import Experience from "./Experience";
import { negExperience, negSkills } from "../../data";

const Negotiation = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Skills", "Experience"]);
  }, []);
  return (
    <>
      <Home
        image={"negotiation.png"}
        header="International negotiator"
        text={
          "I enjoy the challenge of finding creative solutions to complex problems. I thrive on the opportunity to build relationships and trust with people from all walks of life, and I firmly believe that communication and collaboration are the key when it comes to creating mutually beneficial deals."
        }
      />
      <Boxes id="skills" items={negSkills} />
      <Carousel id="experience" list={negExperience} />
    </>
  );
};

export default Negotiation;

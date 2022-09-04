import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Skills from "../Utils/Skills";

const skills = [
  {
    header: "Cross-cultural negotiations",
    img: "globe.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
  },
  {
    header: "Cross-cultural negotiations",
    img: "globe.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
  },
  {
    header: "Cross-cultural negotiations",
    img: "globe.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
  },
];

const Negotiation = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Skills", ""]);
  }, []);
  return (
    <>
      <Home
        image={"negotiation.png"}
        header="International negotiator"
        text={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis maxime sunt labore tempora voluptate et nulla laboriosam sequi doloremque omnis, nemo deserunt ipsum facilis sapiente reiciendis! Nesciunt rerum tempore dolorem!"
        }
      />
      <Skills skills={skills} />
    </>
  );
};

export default Negotiation;

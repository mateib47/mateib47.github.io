import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Boxes from "../Utils/Boxes";
import Carousel from "../Utils/Carousel/Carousel";
import Experience from "./Experience";

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
const experience = [
  {
    id: 1,
    icon: "./assets/globe.png",
    title: "Title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "http://mateibucur.me/images/documentation-page.png",
  },
  {
    id: 2,
    icon: "./assets/mobile.png",
    title: "Title1",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "http://mateibucur.me/images/tribute-page.png",
  },
  {
    id: 3,
    icon: "./assets/writing.png",
    title: "Title2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "http://mateibucur.me/images/survey.png",
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
      <Boxes items={skills} />
      <Carousel list = {experience} />
    </>
  );
};

export default Negotiation;

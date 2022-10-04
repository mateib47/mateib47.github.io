import React from "react";
import Portofolio from "./Portofolio/Portofolio";
import Languages from "./Languages/Languages";
import { useEffect } from "react";
import Home from "../Utils/Home";
import HorizontalBars from "../Utils/HorizontalBars";

const data = [
  {
    title: "Responsive Web Design",
    description: `Learnt the languages that developers use to build webpages: HTML (Hypertext Markup Language) for content, and CSS (Cascading Style Sheets) for design. Learnt how to make webpages that respond to different screen sizes.`,
    img: "fcc.png",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    description: `Learnt the fundamentals of JavaScript including variables, arrays, objects, loops, and functions. Applied that knowledge by creating algorithms to manipulate strings and factorialize numbers. Revised two important programming styles or paradigms: Object Oriented Programming (OOP) and Functional Programming (FP)
`,
    img: "fcc.png",
  },
  {
    title: "Front End Development Libraries",
    description: `Learnt how to style quickly with Bootstrap. Learn how add logic to CSS styles and extend them with Sass. Learnt jQuery, React and Redux. Implemented five web applications using React.
`,
    img: "fcc.png",
  },
];

const Programming = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Languages", "Portofolio"]);
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
      <Portofolio />
      <HorizontalBars data={data} title="Certifications" />
    </>
  );
};

export default Programming;

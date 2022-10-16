import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import InfoDisplay from "../Utils/InfoDisplay";
import Boxes from "../Utils/Boxes";
import HorizontalBars from "../Utils/HorizontalBars";

const b = {
  name: "Babythings",
  lifetime: "Sep 2021 - Jul 2022",
  img: "business_team.png",
  header:
    "As a CTO and co-founder, I had to assist the team in business development and market research while developing the website of the store",
  tasks: [
    "Conducted field interviews with potential customers",
    "Created multiple MVP websites",
    "Designed, developed, deployed, and maintained all software ",
    "Developed the e-commerce platform using React.js and Commerce.js",
    "Worked in a team of five people of different nationalities and backgrounds",
    "Developed the business plan and pitched the business idea as the final graduation assignment of the Honours Business & Entrepreneurship program",
  ],
};
const items = [
  {
    header: "BabyThings",
    img: "globe.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
  },
  {
    header: "Twente Hackathon",
    img: "globe.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
  },
  {
    header: "Fat Rhino studios",
    img: "globe.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
  },
];

const Entrepreneurship = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro"]);
  }, []);
  return (
    <>
      <Home
        image={"honours2.png"}
        header="Student entrepreneur"
        text={`I have always been driven to start my own businesses. I believe that being a entrepreneur allows me to have a greater impact on the world. I am able to use my knowledge and skills to create products and services that make a difference in people's lives.`}
      />
      <HorizontalBars title="Past businesses" data={items} />
      <InfoDisplay
        lifetime={b.lifetime}
        name={b.name}
        header={b.header}
        tasks={b.tasks}
        img={b.img}
      />
    </>
  );
};

export default Entrepreneurship;

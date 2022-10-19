import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import InfoDisplay from "../Utils/InfoDisplay";
import Boxes from "../Utils/Boxes";
import HorizontalBars from "../Utils/HorizontalBars";
import { babythings as b, businesses } from "../../data";


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
      <HorizontalBars title="Past businesses" data={businesses} />
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

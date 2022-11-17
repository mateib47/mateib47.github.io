import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Story from "../Utils/Story";

const Barbershop = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Story"]);
  }, []);
  return (
    <>
      <Home
        image={"barberImg.png"}
        header="Matei's Barbershop"
        text={`I have been cutting hair for 2 years. I always enjoy the creative process, the satisfaction of creating a new look for someone and the conversations with people on the barber's chair. `}
      />
      <Story
        header="How it started"
        description="I became a barber by cutting my own hair during the lockdown. I watched some videos on YouTube and then I did it and it went pretty well. I have been cutting my hair since then. After the lockdown ended, my friends liked my haircut so they gave it a try. I have been cutting hair for 2 years and I had more than 30 satisfied customers from all over the world."
      />
    </>
  );
};

export default Barbershop;

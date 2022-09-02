import React from "react";
import { useEffect } from "react";
import TedVideo from "./TedVideo";
import Home from "../Utils/Home";
import Story from "./Story";

const PublicSpeak = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Story", "Video"]);
  }, []);
  return (
    <>
      <Home
        image={"ted.jpg"}
        header="Speaker at TEDx TwenteU"
        text={
          `I managed to overcome my fear of speaking in public and also fulfil
          one of my dreams, to be a TED speaker. After months of preparing,
          rehearsing and coaching, I gave a 10-minute speech about
          decision-making in front of a hundred people audience.`
        }
      />
      <Story />
      <TedVideo />
    </>
  );
};

export default PublicSpeak;

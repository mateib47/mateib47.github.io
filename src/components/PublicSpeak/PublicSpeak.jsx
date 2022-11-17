import React from "react";
import { useEffect } from "react";
import TedVideo from "./TedVideo";
import Home from "../Utils/Home";
import Story from "../Utils/Story";

const PublicSpeak = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Story", "Video"]);
  }, []);
  return (
    <>
      <Home
        image={"ted.jpg"}
        header="Speaker at TEDx TwenteU"
        text={`I managed to overcome my fear of speaking in public and also fulfil
          one of my dreams, to be a TED speaker. After months of preparing,
          rehearsing and coaching, I gave a 10-minute speech about
          decision-making in front of a hundred people audience.`}
      />
      <Story
        header="My story"
        description="I was always scared of public speaking, but I decided that I
              wanted to become a TED speaker because I wanted to share my story
              with the world. I knew that if I could overcome my fear of public
              speaking, I could inspire others to do the same. I went through all the steps of selection received professional coaching.
              I practiced like crazy, I was rehearsing my speech during lunch breaks, while running and even swimming. Eventually, I built up the confidence to
              speak in front of large audiences."
      />
      <TedVideo />
    </>
  );
};

export default PublicSpeak;

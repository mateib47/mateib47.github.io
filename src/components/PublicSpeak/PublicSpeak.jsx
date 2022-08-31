import React from "react";
import { useEffect } from "react";
import TedVideo from "./TedVideo";
import Home from "./Home";
import Story from "./Story";

const PublicSpeak = ({ setItems }) => {
  useEffect(() => {
    setItems(["Home", "Story", "Video"]);
  }, []);
  return (
    <>
      <Home />
      <Story />
      <TedVideo />
    </>
  );
};

export default PublicSpeak;

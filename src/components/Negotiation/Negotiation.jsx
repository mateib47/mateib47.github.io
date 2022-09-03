import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";

const Negotiation = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "", ""]);
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
    </>
  );
};

export default Negotiation;

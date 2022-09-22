import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Babythings from "./Babythings";

const Entrepreneurship = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro"]);
  }, []);
  return (
    <>
      <Home
        image={"business_team.png"}
        header="Student entrepreneur"
        text={
          `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores tempore quasi quos ea aliquid eveniet. Nulla inventore ducimus veniam expedita provident voluptate laborum sunt temporibus, excepturi doloremque, dolorem eius.`
        }
      />
      <Babythings />
    </>
  );
};

export default Entrepreneurship;

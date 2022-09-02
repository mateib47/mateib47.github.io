import React from "react";
import Portofolio from "./Portofolio/Portofolio";
import Languages from "./Languages/Languages";
import { useEffect } from "react";
import Home from "../Utils/Home";

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
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius dolores tempore quasi quos ea aliquid eveniet. Nulla inventore ducimus veniam expedita provident voluptate laborum sunt temporibus, excepturi doloremque, dolorem eius."
        }
      />
      <Languages />
      <Portofolio />
    </>
  );
};

export default Programming;

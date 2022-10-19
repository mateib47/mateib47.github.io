import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Running from "./Running";
import SideBySide from "../Utils/SideBySide";
import { sports } from "../../data";


const Sports = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Running", "Working out"]);
  }, []);
  return (
    <>
      <Home
        image={"sports.png"}
        header="Well rounded athlete"
        text={`I started by working out regularly, running and cycling to keep myself in shape. I then began to focus on bodyweight exercises to help improve my strength and endurance. I have now become a well rounded athlete by incorporating all of these activities into my routine.`}
      />
      {/* <Running /> */}
      <SideBySide props={sports[0]} id="running"/>
      <SideBySide props={sports[1]} id="working out" />
    </>
  );
};
export default Sports;

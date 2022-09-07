import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Running from "./Running";

const Sports = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Running"]);
  }, []);
  return (
    <>
      <Home
        image={"sports.png"}
        header="Well rounded athlete"
        text={`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem alias delectus facilis adipisci sapiente ducimus maiores cumque molestias vitae temporibus quaerat aliquam suscipit dignissimos, libero qui vel deleniti harum voluptas!
          `}
      />
      <Running />
    </>
  );
};
export default Sports;

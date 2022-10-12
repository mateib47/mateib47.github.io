import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Running from "./Running";
import SideBySide from "../Utils/SideBySide";

const sports = [
  {
    header: "Running",
    descr:
      "I run because it makes me feel alive. The fresh air, the endorphins, the feeling of my heart pumping and my lungs working--it's all invigorating and empowering. I also run because it requires mental toughness. Every time I lace up my shoes and head out the door, I know I'm going to have to push myself physically and mentally. I might get tired, I might want to give up, but I never do. Why? Because I know that running makes me stronger, both physically and mentally. It makes me better able to handle whatever life throws my way.",
    sideHeader: "Samcheok Marathon, South Korea",
    sideDescr: "Watch my finish, in 4 hours and 45 minutes",
    iframe: "https://www.youtube.com/embed/d6ywzwNWXmE?start=15083",
  },
];

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
      {/* <Running /> */}
      <SideBySide props={sports[0]} />
    </>
  );
};
export default Sports;

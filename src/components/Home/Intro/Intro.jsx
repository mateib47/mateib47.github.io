import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef, useState } from "react";
import { person } from "../../../data";
import Grow from "@mui/material/Fade";
import VizSensor from "react-visibility-sensor";
import Slide from "@mui/material/Slide";

const Intro = () => {
  const textRef = useRef();
  const containerRef = useRef(null);
  const [showPicture, setShowPicture] = useState(false);

  const handleChange = () => {
    setShowPicture((prev) => !prev);
  };

  const picture = (
    <div className="left">
      <div className="imgContainer">
        <Slide
          direction="up"
          in={showPicture}
          container={containerRef.current}
          style={{ transitionDelay: showPicture ? "1100ms" : "0ms" }}
        >
          <img src="assets/profile1.png" alt="Profile Picture" />
        </Slide>
      </div>
    </div>
  );

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: person.attributes,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
    });
  }, []);

  return (
    <div className="intro" id="home">
      <VizSensor
        onChange={(isVisible) => {
          setShowPicture(isVisible);
        }}
        minTopValue="1px"
      >
        <Grow in={showPicture} timeout={1000}>
          {picture}
        </Grow>
      </VizSensor>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>{person.name}</h1>
          <h3>
            {person.status} <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/down.png" alt="Down arrow" />
        </a>
      </div>
    </div>
  );
};

export default Intro;

import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { person } from "../../../data";


const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: person.attributes,
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true
    });
  }, []);

  return (
    <div className="intro" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile1.png" alt="Profile Picture" />
        </div>
      </div>
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

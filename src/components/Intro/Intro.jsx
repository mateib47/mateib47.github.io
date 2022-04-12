import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      strings: ["Web Developer","Entrepreneur", "Negotiator"],
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true
    });
  }, []);

  return (
    <div className="intro" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile1.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Matei Bucur</h1>
          <h3>
            Student <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portofolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Intro;

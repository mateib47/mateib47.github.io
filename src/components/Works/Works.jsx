import "./works.scss";
import {
  worksList} from "../../data";
  import WorksSlide from "./WorksSlide/WorksSlide";
  import { useState } from "react";

const Works = () => {
  const length = worksList.length;
  const [current, setCurrent] = useState(0);
  const handleClick = (way) => {
    way === "left" ? setCurrent(current > 0 ? current - 1 : length - 1) : 
      setCurrent(current < length - 1 ? current + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform: `translateX(-${current * 100}vw)`}}>
      {worksList.map((d) => (
          <WorksSlide icon={d.icon} title={d.title} desc={d.desc} img={d.img} />     
      ))}
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" alt="" className="arrow right" onClick={() => handleClick()} />
    </div>
  );
};

export default Works;

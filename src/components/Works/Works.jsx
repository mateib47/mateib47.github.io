import "./works.scss";
import {
  worksList} from "../../data";
  import WorksSlide from "./WorksSlide/WorksSlide";

const Works = () => {
console.log(worksList)

  return (
    <div className="works" id="works">
      <div className="slider">
      {worksList.map((d) => (
          <WorksSlide icon={d.icon} title={d.title} desc={d.desc} img={d.img} />     
      ))}
      </div>
      <img src="assets/arrow.png" alt="" className="arrow left" />
      <img src="assets/arrow.png" alt="" className="arrow right" />
    </div>
  );
};

export default Works;

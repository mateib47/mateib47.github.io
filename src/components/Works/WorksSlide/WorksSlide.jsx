import './worksSlide.scss'

const WorksSlide = ({icon, title, desc, img}) => {
  return (
    <div className="container">
      <div className="item">
        <div className="left">
          <div className="leftContainer">
            <div className="imgContainer">
              <img src={icon} alt="" />
            </div>
            <h1>{title}</h1>
            <p>{desc}</p>
            <span>Projects</span>
          </div>
        </div>
        <div className="right">
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WorksSlide;

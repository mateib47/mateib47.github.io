import "./portofolio.scss";
import PortfolioList from "./PortofolioList/PortfolioList";
import Project from "./Project/Project";
import { useState } from "react";
import { projectsList, sectionsList } from "../../data";
import { useEffect } from "react";

const Portofolio = () => {
  const [selected, setSelected] = useState("0");
  const [data, setData] = useState([]);
  const list = sectionsList;

  useEffect(() => {
    setData(projectsList.find((elem) => elem.id == selected).items);
  }, [selected]);

  return (
    <div className="portofolio" id="portofolio">
      <h1>Portofolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            id={item.id}
            active={selected === item.id}
            setSelected={setSelected}
            key={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((x) => (
          <Project key={x.id} img={x.img} title={x.title} />
        ))}
      </div>
    </div>
  );
};

export default Portofolio;

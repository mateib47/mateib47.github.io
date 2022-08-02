import "./portofolio.scss";
import PortfolioList from "./PortofolioList/PortfolioList";
import Project from "./Project/Project";
import { useState } from "react";
import {
  projectsList,
  sectionsList,
  fetchSectionList,
  fetchProjectsBySection,
} from "../../data";
import { useEffect } from "react";
import { useRef } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Progress from "../Progress/Progress";

const Portofolio = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sectLoading, setSectLoading] = useState(false);

  //const projectListElem = useRef();

  //const list = fetchSectionList(setSections);
  useEffect(() => {
    setSectLoading(true);
    fetchSectionList(setSections, setSectLoading, setSelected);
  }, []);

  useEffect(() => {
    fetchProjectsBySection(selected, setData, setLoading);
  }, [selected]);

  //todo on section change, old projects are renderedagain for a short time

  return (
    <div className="portofolio" id="portofolio">
      <h1>Portofolio</h1>
      <ul>
        {!sectLoading ? (
          sections.map((item) => (
            <PortfolioList
              title={item}
              id={item}
              active={selected === item}
              setSelected={setSelected}
              key={item}
              setLoading={setLoading}
            />
          ))
        ) : (
          <>
          </>
        )}
      </ul>
      <div className="container">
        {!loading && !sectLoading ? (
          data.map((x) => (
            <Project
              key={x.id}
              img={x.img}
              title={x.name}
              description={x.description}
            />
          ))
        ) : (
          <div className="progressContainer">
            <Progress />
          </div>
        )}
      </div>
    </div>
  );
};

export default Portofolio;

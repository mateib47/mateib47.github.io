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
import ProjectExtended from "./ProjectExtended/ProjectExtended";

const Portofolio = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sectLoading, setSectLoading] = useState(false);
  const [projectDisplay, setProjectDisplay] = useState();

  //const projectListElem = useRef();

  //const list = fetchSectionList(setSections);
  useEffect(() => {
    setSectLoading(true);
    fetchSectionList(setSections, setSectLoading, setSelected);
  }, []);

  useEffect(() => {
    fetchProjectsBySection(selected, setData, setLoading);
  }, [selected]);

  useEffect(() => {
    console.log(projectDisplay);
  }, [projectDisplay]);

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
              setProjectDisplay={setProjectDisplay}
            />
          ))
        ) : (
          <></>
        )}
      </ul>
      <div className="container">
        {projectDisplay ? (
          <div className="left">
            <ProjectExtended project={projectDisplay}/>
          </div>
        ) : (
          <></>
        )}
        <div className="right">
          {!loading && !sectLoading ? (
            data.map((x) => (
              <Project
                id={x.id}
                img={x.img}
                title={x.name}
                description={x.description}
                setProjectDisplay={setProjectDisplay}
                projectObj={x}
              />
            ))
          ) : (
            <div className="progressContainer">
              <Progress />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;

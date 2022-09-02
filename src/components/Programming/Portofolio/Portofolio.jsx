import "./portofolio.scss";
import PortfolioList from "./PortofolioList/PortfolioList";
import Project from "./Project/Project";
import { useState } from "react";
import {
  projectsList,
  sectionsList,
  fetchSectionList,
  fetchProjectsBySection,
} from "../../../data";
import { useEffect } from "react";
import Progress from "../../Progress/Progress";
import ProjectExtended from "./ProjectExtended/ProjectExtended";
import Zoom from "@mui/material/Zoom";
import Typography from "@mui/material/Typography";

const Portofolio = () => {
  const [selected, setSelected] = useState("");
  const [data, setData] = useState([]);
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sectLoading, setSectLoading] = useState(false);
  const [projectDisplay, setProjectDisplay] = useState();

  useEffect(() => {
    setSectLoading(true);
    fetchSectionList(setSections, setSectLoading, setSelected);
  }, []);

  useEffect(() => {
    fetchProjectsBySection(selected, setData, setLoading);
  }, [selected]);

  // useEffect(() => {
  //   console.log(projectDisplay);
  // }, [projectDisplay]);

  return (
    <div className="portofolio" id="portofolio">
      <div className="top">
        <Typography variant="h1" color="text.default">
          Portofolio
        </Typography>
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
      </div>
      <div className="bottom">
        <div className="container">
          {projectDisplay ? (
            <div className="left">
              <ProjectExtended
                project={projectDisplay}
                setProjectDisplay={setProjectDisplay}
              />
            </div>
          ) : (
            <></>
          )}
          <div className="right">
            {!loading && !sectLoading ? (
              data.map((x) => (
                <Zoom
                  in={!loading}
                  style={{
                    transitionDelay: !loading
                      ? data.indexOf(x) * 200 + "ms"
                      : "0ms",
                  }}
                >
                  <div>
                    <Project
                      id={x.id}
                      img={x.img}
                      title={x.name}
                      description={x.description}
                      setProjectDisplay={setProjectDisplay}
                      projectObj={x}
                    />
                  </div>
                </Zoom>
              ))
            ) : (
              <Progress />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;

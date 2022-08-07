import "./about.scss";
import { person } from "../../../data";
import { useEffect } from "react";
import ReactWordcloud from "react-wordcloud";

const About = () => {
  const createDescription = () => {
    let s = person.description;
    let w = person.boldedWords;
    for (let i = 0; i < w.length; i++) {
      let word = w[i];
      let regex = new RegExp(w[i], "g");
      s = s.replace(regex, word.bold());
    }
    return s;
  };

  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };
  const size = [900, 400];

  return (
    <div className="about" id="about">
      <h1>About me</h1>
      <div className="container">
        <div className="left">
          <div
            className="textContainer"
            dangerouslySetInnerHTML={{ __html: createDescription() }}
          />
        </div>
        <div className="right">
          <ReactWordcloud
            words={person.wordCloud}
            options={options}
            size={size}
          />
        </div>
      </div>
    </div>
  );
};

export default About;

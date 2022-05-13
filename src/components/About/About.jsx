import "./about.scss";
import { about } from "../../data";

const About = () => {
  const createDescription = () => {
    let s = about.description;
    for (let word in about.boldedWords) {
      let regex = new RegExp(word, "i");
      if (s.word(regex) != -1) {
        console.log("<pre>" + s.replace(regex, "<b>$&</b>") + "</pre>") ;
          
      }
    }
    return s;
  };
//fixme
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="container">
        <div className="left">
          <div className="textContainer">{about.description}</div>
        </div>
        <div className="right">
          <img src={about.imgLink} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

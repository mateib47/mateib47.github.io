import "./about.scss";
import { about } from "../../data";
import { useEffect } from "react";

const About = () => {
  const createDescription = () => {
    let s = about.description;
    let w = about.boldedWords;
    for (let i = 1;i< w.length;i++) {
      let word = w[i];
      let regex = new RegExp(w[i], "g");
      s.replaceAll(regex, `<b>${w[i]}</b>`);
        // if (s.word(regex) != -1) {
        //   console.log("<pre>" + s.replace(regex, "<b>$&</b>") + "</pre>") ;
            
        // }
          
    }
    return s;
  };

  
//fixme
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="container">
        <div className="left">
          <div className="textContainer">{createDescription()}</div>
        </div>
        <div className="right">
          <img src={about.imgLink} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

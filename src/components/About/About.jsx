import "./about.scss";
import { about } from "../../data";
import { useEffect } from "react";

const About = () => {
  const createDescription = () => {
    let s = about.description;
    let w = about.boldedWords;
    for (let i = 0;i< w.length;i++) {
      let word = w[i];
      let regex = new RegExp(w[i], "g");
      s = s.replace(regex, word.bold());
        // if (s.word(regex) != -1) {
        //   console.log("<pre>" + s.replace(regex, "<b>$&</b>") + "</pre>") ;
            
        // }
          
    }
    return s;
  };
  function makeBold(str) {
    // your bold implementation
    return str.bold()
  }

  
//fixme
  return (
    <div className="about">
      <h1>About me</h1>
      <div className="container">
        <div className="left">
          <div className="textContainer" dangerouslySetInnerHTML={{ __html: createDescription() }}/>
        </div>
        <div className="right">
          <img src={about.imgLink} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

import "./about.scss";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="left">
          <div className="textContainer">
            My name is Matei Bucur and I am in my first year of studying
            Technical Computer Science at University of Twente. The numerous
            activities I have done revolving around computer science provided me
            with enough reasons for working in this field of science. I chose to
            join University of Twente and I am sure this computer science
            programme is going to help me get relevant teaching that will
            develop necessary competencies to become a successful programmer and
            discover what branch of this discipline fits best for me. 
            Also, I
            joined the Honours programme, an extracurricular broadening
            programme which ambitious and motivated students are challenged to
            enrich their knowledge. Now, for me it is important to continue
            doing more than needed. I know that going the extra mile and
            ensuring that I am out of my comfort zone is the only way to get
            better. That is why I started working on different programming side
            projects and contributing to open-source ones. I am currently
            improving my web-development knowledge. Finally, my aim is to become
            a high-performance person that is capable of handling large amounts
            of work because my life’s goal is to have a great positive impact on
            society and the world.
          </div>
        </div>
        <div className="right">
            <img src="assets/passions.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;

import "./about.scss";
import { person } from "../../../data";
import { useEffect, useState } from "react";
import ReactWordcloud from "react-wordcloud";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { CenteredGrid } from "../../Utils/Utils";
import VizSensor from "react-visibility-sensor";

const About = () => {
  const [description, setDescription] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setDescription(createDescription());
  }, []);

  const createDescription = () => {
    let descr = [];      
    let w = person.boldedWords;

    for (let d of person.description) {
      for (let i = 0; i < w.length; i++) {
        let word = w[i];
        let regex = new RegExp(w[i], "g");
        d = d.replace(regex, word.bold());
      }
      descr.push(d)
    }
    console.log(descr)
    return descr;
  };

  const options = {
    rotations: 2,
    rotationAngles: [-90, 0],
  };

  return (
    <Box sx={{ flexGrow: 1 }} id="intro">
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <CenteredGrid container item xs={12} md={6}>
          <Box
            sx={{
              width: "90%",
            }}
          >
            <Typography
              variant="h3"
              color="primary"
              sx={{
                overflow: "hidden",
                fontWeight: "600",
                textAlign: "center",
              }}
            >
              About Me
            </Typography>
           
                {description.map((x) => (
                  <Typography
                    variant="body2"
                    color="primary"
                    paragraph={true}
                    align="center"
                    dangerouslySetInnerHTML={{ __html: x }}
                  />
                ))}
  
          </Box>
        </CenteredGrid>
        <CenteredGrid xs={12} md={6} container item>
          <Container
            sx={{
              backgroundColor: "background.default",
              height: "auto",
              width: "100%",
              display: "block",
            }}
          >
            <ReactWordcloud words={person.wordCloud} options={options} />
          </Container>
        </CenteredGrid>
      </Grid>
    </Box>
  );
};

export default About;

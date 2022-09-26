import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import VizSensor from "react-visibility-sensor";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: "20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "20%",
  maxHeight: "100%",
  borderRadius: "50%",
});

const Skills = ({ skills }) => {
  const [show, setShow] = useState(false);

  return (
    <VizSensor
      onChange={(isVisible) => {
        setShow(isVisible);
      }}
    >
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="center"
        sx={{ maxWidth: "80%", margin: "auto" }}
      >
        {skills.map((x) => (
          <Zoom
            in={show}
            style={{
              transitionDelay: show
                ? skills.indexOf(x) * 200 + "ms"
                : "1000ms",
            }}
            minTopValue="1px"
          >
            <Grid item xs={12} md={4}>
              <Skill header={x.header} body={x.body} img={x.img} />
            </Grid>
          </Zoom>
        ))}
      </Grid>
    </VizSensor>
  );
};

const Skill = ({ img, header, body }) => {
  return (
    <Item>
      <Img src={"assets/" + img} />
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: "bold", overflow: "hidden", m: 2 }}
      >
        {header}
      </Typography>
      <Typography variant="body2" color="secondary">
        {body}
      </Typography>
    </Item>
  );
};

export default Skills;

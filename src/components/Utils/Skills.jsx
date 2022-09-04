import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: "20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "20%",
  maxHeight: "100%",
  borderRadius: "50%"
});

const Skills = ({ skills }) => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ maxWidth: "80%", margin: "auto" }}
    >
      {skills.map((x) => (
        <Grid item xs={4}>
          <Skill header={x.header} body={x.body} img={x.img} />
        </Grid>
      ))}
    </Grid>
  );
};

const Skill = ({ img, header, body }) => {
  return (
    <Item>
      <Img src={"assets/" + img} />
      <Typography variant="h1" color="primary" sx={{fontSize: "32px",fontWeight:"bold", overflow:"hidden", m:3}}>
        {header}
      </Typography>
      <Typography variant="body1" color="secondary" sx={{fontSize: "18px",}}>
        {body}
      </Typography>
    </Item>
  );
};

export default Skills;

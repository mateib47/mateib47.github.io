import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Iframe } from "../Utils/Utils";



const TedVideo = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
      id="video"
    >
      <Grid item xs={8}>
        <Iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/tudD4yemkYw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></Iframe>
      </Grid>
    </Grid>
  );
};

export default TedVideo;

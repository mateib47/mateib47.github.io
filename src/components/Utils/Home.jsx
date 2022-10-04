import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";
import { CenteredGrid } from "./Utils";

import { useState, useEffect } from "react";
import { Img } from "./Utils";

const Home = ({ image, header, text }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }} id="intro">
      <Grid container sx={{ width: "100%", height: "100%" }}>
        <CenteredGrid xs={12} md={6} container item>
          <Slide
            direction="right"
            in={checked}
            mountOnEnter
            unmountOnExit
            timeout={3000}
          >
            <Container
              sx={{
                backgroundColor: "text.default",
                height: "auto",
                width: "70%",
                borderRadius: "50%",
                display: "block",
              }}
            >
              <Img src={"assets/" + image} />
            </Container>
          </Slide>
        </CenteredGrid>
        <CenteredGrid container item xs={12} md={6}  sx={{ paddingLeft: "0" }}>
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Grow in={checked} timeout={2000}>
              <Typography
                variant="h1"
                color="primary"
                sx={{ overflow: "hidden", fontWeight: "600" }}
              >
                {header}
              </Typography>
            </Grow>
            <Grow
              in={checked}
              style={{ transformOrigin: "0 0 0" }}
              {...(checked ? { timeout: 3000 } : {})}
            >
              <Typography variant="body1" color="primary">
                {text}
              </Typography>
            </Grow>
          </Box>
        </CenteredGrid>
      </Grid>
    </Box>
  );
};

export default Home;

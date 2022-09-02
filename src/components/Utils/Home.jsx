import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const Home = ({ image, header, text }) => {
  return (
    <Box sx={{ flexGrow: 1 }} id="intro">
      <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
        <Grid
          container
          item
          xs={6}
          alignItems="center"
          justifyContent="center"
          direction="column"
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
        </Grid>
        <Grid
          container
          item
          xs={6}
          alignItems="center"
          justifyContent="center"
          direction="column"
          sx={{ paddingLeft: "0" }}
        >
          <Box
            sx={{
              width: "70%",
            }}
          >
            <Typography
              variant="h1"
              color="primary"
              sx={{ overflow: "hidden", fontWeight:"600" }}
            >
              {header}
            </Typography>
            <Typography variant="body1" color="primary">
              {text}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

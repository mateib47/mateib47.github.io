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
  maxWidth: "80%",
  maxHeight: "100%",
  borderRadius: "10px",
});

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
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
              width: "70%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Img src="assets/programming.png" />
          </Container>
        </Grid>
        <Grid
          container
          item
          xs={6}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="h1" color="initial" sx={{overflow:"hidden"}}>
            Web developer
          </Typography>
          <Typography variant="body1" color="initial">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            maxime quae, numquam eveniet, ducimus consequuntur cumque ex animi
            inventore nostrum unde repellat itaque quidem sunt ullam et facere,
            rem voluptatibus.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "70%",
  maxHeight: "60%",
  borderRadius: "50%",
});

const Home = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} sx={{ width: "100%", height: "100%" }}>
        <Grid container item xs={6} maxWidth="m">
          <Img src="assets/ted.jpg" />
        </Grid>
        <Grid
          container
          item
          xs={6}
          alignItems="center"
          justifyContent="center"
          direction="column"
        >
          <Typography variant="h1" color="initial">
            Speaker at TEDx TwenteU
          </Typography>
          <Typography variant="body1" color="initial">
            I managed to overcome my fear of speaking in public and also fulfil
            one of my dreams, to be a TED speaker. After months of preparing,
            rehearsing and coaching, I gave a 10-minute speech about
            decision-making in front of a hundred people audience.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;

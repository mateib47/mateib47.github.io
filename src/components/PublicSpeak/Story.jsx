import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

const MyPaper = styled(Paper)(({ theme }) => ({
  maxWidth: "88%",
  margin: "auto",
  height: "70%",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    maxWidth: "40%",
    height: "80%",
  },
}));

const Story = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      id="story"
    >
      <MyPaper container elevation={3}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="space-between"
          justifyContent="space-evenly"
          sx={{ height: "100%", maxWidth: "80%" }}
        >
          <Grid item>
            <Typography
              variant="h1"
              color="primary.main"
              sx={{ overflow: "hidden" }}
            >
              My story
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="initial">
              I was always scared of public speaking, but I decided that I
              wanted to become a TED speaker because I wanted to share my story
              with the world. I knew that if I could overcome my fear of public
              speaking, I could inspire others to do the same. I went through all the steps of selection received professional coaching.
              I practiced like crazy, I was rehearsing my speech during lunch breaks, while running and even swimming. Eventually, I built up the confidence to
              speak in front of large audiences.
            </Typography>
          </Grid>
        </Grid>
      </MyPaper>
    </Box>
  );
};

//TODO improve the text
export default Story;

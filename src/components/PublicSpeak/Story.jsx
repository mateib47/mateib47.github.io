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
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est nam
              dolor ducimus animi, eligendi eius ex, consequatur explicabo
              adipisci aliquam soluta mollitia, quo blanditiis? Nam, minus
              officia! Sed, mollitia accusamus! Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Porro deleniti fuga in rerum soluta
              illo itaque explicabo, expedita nam, animi natus consectetur
              facere ex deserunt dolor consequatur qui autem aperiam.
            </Typography>
          </Grid>
        </Grid>
      </MyPaper>
    </Box>
  );
};

export default Story;

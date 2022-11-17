import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

//todo fix component bug on 375 px screen width

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

const Story = ({ header, description }) => {
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
              {header}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="initial">
              {description}
            </Typography>
          </Grid>
        </Grid>
      </MyPaper>
    </Box>
  );
};

//TODO improve the text
export default Story;

import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

const Img = styled("img")({
  margin: "auto",
  display: "block",
});

const MyPaper = styled(Paper)(({ theme }) => ({
  margin: "25px",
  width: "80%",
  padding:"8px",
  [theme.breakpoints.up("md")]: {
    width: "60%",
    display:"flex",
  },
}));

const HorizontalBars = ({ id,title, data }) => {
  return (
    <div id={id}>
      <Typography
        variant="h3"
        color="primary"
        align="center"
        sx={{ p:1,m: 2, overflow: "hidden", fontWeight: 500 }}
      >
        {title}
      </Typography>
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        {data.map((x) => (
            <MyPaper item>
              <Img
                src={"assets/" + x.img}
                sx={{ flex: 1, width: "20%", p: 2 }}
              />
              <Box sx={{ flex: 10 }}>
                <Typography variant="h4" sx={{ overflow: "hidden" }}>
                  {x.title}
                </Typography>
                <Typography variant="body1">{x.description}</Typography>
              </Box>
            </MyPaper>
        ))}
      </Grid>
    </div>
  );
};

export default HorizontalBars;

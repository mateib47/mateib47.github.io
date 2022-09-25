import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "20%",
  maxHeight: "20%",
});

const HorizontalBars = ({data}) => {
  return (
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
        <Paper item sx={{ backgroundColor: "primary.main", m:3, width:"60%" }}>
          <Paper sx={{ display: "flex", p:1 }}>
            <Img src={"assets/" + x.img} sx={{width:"20%", p:2}} />
            <Box>
                <Typography variant="h3" sx={{overflow:"hidden"}}>{x.title}</Typography>
                <Typography variant="body1" >{x.description}</Typography>
            </Box>
          </Paper>
        </Paper>
      ))}
    </Grid>
  );
};

export default HorizontalBars;

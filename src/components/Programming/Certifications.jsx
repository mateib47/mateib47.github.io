import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Typography from '@mui/material/Typography'

const data = [
  {
    title: "Certification",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est doloribus voluptatum quidem expedita aliquid quae, eaque necessitatibus provident nobis dignissimos consequuntur? Doloremque suscipit ut magnam. Cum vitae eligendi quaerat dignissimos?
`,
    img: "globe.png",
  },
  {
    title: "Certification",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est doloribus voluptatum quidem expedita aliquid quae, eaque necessitatibus provident nobis dignissimos consequuntur? Doloremque suscipit ut magnam. Cum vitae eligendi quaerat dignissimos?
`,
    img: "globe.png",
  },
  {
    title: "Certification",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est doloribus voluptatum quidem expedita aliquid quae, eaque necessitatibus provident nobis dignissimos consequuntur? Doloremque suscipit ut magnam. Cum vitae eligendi quaerat dignissimos?
`,
    img: "globe.png",
  },
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "20%",
  maxHeight: "20%",
});

const Certifications = () => {
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
        <Grid item sx={{ backgroundColor: "primary.main", m:3, width:"50%" }}>
          <Container sx={{ display: "flex" }}>
            <Img src={"assets/" + x.img} />
            <Box>
                <Typography variant="h3">{x.title}</Typography>
                <Typography variant="body1" >{x.description}</Typography>

            </Box>
          </Container>
        </Grid>
      ))}
    </Grid>
  );
};

export default Certifications;

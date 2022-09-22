import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Skills from "../Utils/Skills";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius:"10px"
  });

  const skills = [
    {
      header: "Cross-cultural negotiations",
      img: "globe.png",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
    },
    {
      header: "Cross-cultural negotiations",
      img: "globe.png",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
    },
    {
      header: "Cross-cultural negotiations",
      img: "globe.png",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio at voluptatibus tempora doloremque repellat eligendi autem labore esse, ipsum nobis repudiandae non eos tenetur nostrum adipisci officiis error, exercitationem asperiores",
    },
  ];

const Babythings = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", mx:4, my:2 }} maxWidth={false}>
      <Box sx={{ flex: 1, display: "flex", justifyContent:"center", alignItems:"center" }}>
        <Img src="assets/business.PNG" />
        <Typography variant="subtitle2" color="primary.default" >
          As a CTO and co-founder, I had to assist the team in business
          development and market research while developing the website of the
          store
        </Typography>
      </Box>
      <Box sx={{flex:3}}>
        <Skills skills={skills} />
      </Box>
    </Container>
  );
};

export default Babythings;

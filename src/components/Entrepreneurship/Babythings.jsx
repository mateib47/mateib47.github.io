import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Skills from "../Utils/Skills";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";

const Img = styled("img")(({ theme }) => ({
  margin: 0,
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
  borderRadius: "10px",
  backgroundColor: theme.palette.text.default,
}));

const tasks = [
  "Conducted field interviews with potential customers",
  "Created multiple MVP websites",
  "Designed, developed, deployed, and maintained all software ",
  "Developed the e-commerce platform using React.js and Commerce.js",
  "Worked in a team of five people of different nationalities and backgrounds",
  "Developed the business plan and pitched the business idea as the final graduation assignment of the Honours Business & Entrepreneurship program",
];

const Babythings = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column" }} maxWidth="lg">
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent:"space-between",
          alignItems: "center",
        }}
      >
        <Img src="assets/business.PNG" />
        <Typography
          variant="h5"
          align="center"
          sx={{
            fontWeight: 600,
            width: "60%",
            margin: "auto",
            color: "primary.main",
          }}
        >
          As a CTO and co-founder, I had to assist the team in business
          development and market research while developing the website of the
          store
        </Typography>
      </Box>
      <Box
        sx={{
          flex: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <List>
          {tasks.map((x) => (
            <ListItem>
              <ListItemIcon>
                <ArrowCircleRightIcon sx={{ color: "primary.main" }} />
              </ListItemIcon>
              <ListItemText primary={x} />
            </ListItem>
          ))}
        </List>
        <Img src="assets/business_team.png" />
      </Box>
    </Container>
  );
};

export default Babythings;

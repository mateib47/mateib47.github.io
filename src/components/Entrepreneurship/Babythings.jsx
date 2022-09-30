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
  width: "80%",
  height: "auto",
  borderRadius: "10px",
  backgroundColor: theme.palette.text.default,
  [theme.breakpoints.up("md")]: {
    maxWidth: "100%",
    margin: "auto",

  },
}));
const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  [theme.breakpoints.up("md")]: {
    flexDirection: "row",
  },
}));
const MyTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  width: "95%",
  margin: "auto",
  fontSize: "15px",
  color: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    width: "60%",
  },
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
      <MyBox
        sx={{
          flex: 1,
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Container sx={{width:"auto", height:"100%", flex:1, display:"flex", flexDirection:"column", justifyContent:"center", alignContent:"center"}}>
          <Img src="assets/business2.PNG" />
          <Typography variant="h6" align="center" sx={{overflow:"hidden"}}>Babythings</Typography>
          <Typography variant="body1" align="center" sx={{overflow:"hidden"}}>Sep 2021 - Jul 2022</Typography>
        </Container>
        <MyTypography variant="h5" align="center" sx={{flex:3}}>
          As a CTO and co-founder, I had to assist the team in business
          development and market research while developing the website of the
          store
        </MyTypography>
      </MyBox>
      <MyBox
        sx={{
          flex: 3,
          justifyContent: "center",
        }}
      >
        <List dense={true}>
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
      </MyBox>
    </Container>
  );
};

export default Babythings;

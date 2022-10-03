import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
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


const InfoDisplay = ({name,lifetime,header,tasks, img}) => {
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
          <Typography variant="h6" align="center" sx={{overflow:"hidden"}}>{name}</Typography>
          <Typography variant="body1" align="center" sx={{overflow:"hidden"}}>{lifetime}</Typography>
        </Container>
        <MyTypography variant="h5" align="center" sx={{flex:3}}>
          {header}
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
        <Img src={"assets/" + img} />
      </MyBox>
    </Container>
  );
};

export default InfoDisplay;

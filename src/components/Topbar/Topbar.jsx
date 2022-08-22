import "./topbar.scss";
import { Person, Mail, LinkedIn, GitHub, Folder } from "@material-ui/icons";
import { person } from "../../data";
import Selector from "./Selector/Selector";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


const Topbar = ({ open, setOpen, setTheme }) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };
  //fetch from server the contact details data and have a map that renders them
  //add cv and fetch it from server
  return (
    <Container className={"topbar " + (open && "active")} sx={{backgroundColor:"background.default"}} maxWidth="xl">
      <div className="wrapper">
        <div className="left">
          <Typography className="logo" sx={{color:'text.default'}} >matei.</Typography>
        </div>
        <div className="center">
          <Selector setTheme={setTheme} />
        </div>
        <div className="right">
          <Container  className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1" style={{backgroundColor:'text.default'}}></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Topbar;

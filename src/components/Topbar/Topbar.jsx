import "./topbar.scss";
import { Person, Mail, LinkedIn, GitHub, Folder } from "@material-ui/icons";
import { person } from "../../data";
import Selector from "./Selector/Selector";
import { useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import useTheme from "@mui/material/styles/useTheme";

const Topbar = ({ open, setOpen, setTheme, theme }) => {
  const muiTheme = useTheme();

  return (
    <Container
      className={"topbar " + (open && "active")}
      sx={{ backgroundColor: "background.default" }}
      maxWidth="xl"
    >
      <div className="wrapper">
        <div className="left">
          <Typography className="logo" sx={{ color: "text.default" }}>
            matei.
          </Typography>
        </div>
        <div className="center">
          <Selector setTheme={setTheme} theme={theme} />
        </div>
        <div className="right">
          <Container className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1" style={{ backgroundColor: muiTheme.palette.primary.main  }}></span>
            <span className="line2" style={{ backgroundColor: muiTheme.palette.primary.main  }}></span>
            <span className="line3" style={{ backgroundColor: muiTheme.palette.primary.main  }}></span>
          </Container>
        </div>
      </div>
    </Container>
  );
};

export default Topbar;

import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import { Link } from "react-router-dom";
import { siteModes, siteModesRaw } from "../../../data";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";

const Selector = ({ theme }) => {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleMenuItemClick = (event, index) => {
    setOpen(false);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        variant="contained"
        ref={anchorRef}
        aria-label="split button"
      >
        <Button>{siteModes[theme]}</Button>
        <Button
          size="small"
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select merge strategy"
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem>
                  {siteModes.map((option, index) => (
                    <Link
                      to={"/" + siteModesRaw[index]}
                      style={{ textDecoration: "none", color: "inherit" }}
                      key={option + "-link"}
                    >
                      <MenuItem
                        key={option}
                        selected={index === theme}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        <Typography variant="h7">{option}</Typography>
                      </MenuItem>
                    </Link>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </React.Fragment>
  );
};

export default Selector;

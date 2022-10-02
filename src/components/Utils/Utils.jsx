import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Grow from "@mui/material/Grow";
import Slide from "@mui/material/Slide";

export const CenteredGrid = styled(Grid)(({ theme }) => ({
  display:"flex",
  alignItems: "center",
  justifyContent: "center",
  direction: "column",
}));

export const Iframe = styled('iframe')(({ theme }) => ({
  width:"400px",
  [theme.breakpoints.up("md")]: {
    width:"560px"

  },
}));

import React from "react";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Iframe } from "../Utils/Utils";
import { CenteredGrid } from "../Utils/Utils";

const Img = styled("img")({
  display: "block",
  maxWidth: "60%",
  maxHeight: "60%",
  marginTop: "20px",
});

const MyTypography = styled(Typography)(({ theme }) => ({
  width: "95%",
  color: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    width: "70%",
  },
}));

const SideBySide = ({props: { header, descr, sideHeader, sideDescr, iframe, img }, id}) => {
  return (
    <Grid container sx={{ width: "100%", height: "100%", px: 2 }} id={id}>
      <CenteredGrid
        xs={12}
        md={6}
        container
        item
        sx={{ flexDirection: "column" }}
      >
        <MyTypography variant="h2" color="primary" sx={{ fontWeight: "600" }}>
          {header}
        </MyTypography>
        <MyTypography variant="body1" color="primary">
          {descr}
        </MyTypography>
      </CenteredGrid>
      <CenteredGrid
        container
        item
        xs={12}
        md={6}
        sx={{ paddingLeft: "0", flexDirection: "column" }}
      >
        <Typography variant="h5" align="center">
          {sideHeader}
        </Typography>
        <Typography variant="subtitle1">{sideDescr}</Typography>
        {iframe ? (
          <Iframe
            width="560"
            height="315"
            src={iframe}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></Iframe>
        ) : (
          <Img src={img} alt="" />
        )}
      </CenteredGrid>
    </Grid>
  );
};

export default SideBySide;

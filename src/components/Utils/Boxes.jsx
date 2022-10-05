import React from "react";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Zoom from "@mui/material/Zoom";
import VizSensor from "react-visibility-sensor";
import { CenteredGrid } from "./Utils";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  padding: "20px",
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "20%",
  maxHeight: "100%",
  borderRadius: "50%",
});

const Boxes = ({ items }) => {
  const [show, setShow] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <VizSensor
        onChange={(isVisible) => {
          setShow(isVisible);
        }}
        partialVisibility
        offset={{ top: 100 }}
      >
        <Grid
          container
          spacing={4}
          alignItems="stretch"
          justifyContent="space-evenly"
          sx={{ maxWidth: "80%", margin: "auto" }}
        >
          {items.map((x) => (
            <Zoom
              in={show}
              style={{
                transitionDelay: show
                  ? items.indexOf(x) * 200 + "ms"
                  : "1000ms",
              }}
            >
              <Grid
                item
                xs={12}
                md={4}
                lg={3}
                style={{ display: "flex", height: "auto" }}
                align
              >
                <MyCard header={x.header} body={x.body} img={x.img} />
              </Grid>
            </Zoom>
          ))}
        </Grid>
      </VizSensor>
    </Box>
  );
};

const MyCard = ({ img, header, body }) => {
  return (
    <Item>
      <Img src={"assets/" + img} />
      <Typography
        variant="h4"
        color="primary"
        sx={{ fontWeight: "bold", overflow: "hidden", m: 2 }}
      >
        {header}
      </Typography>
      <Typography variant="body2" color="secondary">
        {body}
      </Typography>
    </Item>
  );
};

export default Boxes;

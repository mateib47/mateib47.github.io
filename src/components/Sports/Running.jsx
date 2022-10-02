import React from "react";
import { runningData } from "../../data";
import { LineChart, Line } from "recharts";
import { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Iframe } from "../Utils/Utils";
import { CenteredGrid } from "../Utils/Utils";
import Grid from "@mui/material/Grid";

const Running = () => {
  const [time, setTime] = useState([]);
  const [distance, setDistance] = useState([]);
  const [total, setTotal] = useState({});

  useEffect(() => {
    setTime(
      runningData.activities.map((x) => getDuration(x.active_duration_ms))
    );
    setDistance(
      runningData.activities.map((x) => ({
        uv: x.summaries.find((x) => x.metric == "distance").value,
      }))
    );
    setTotal({ distance: distance.reduce((a, b) => a + b.uv, 0) });
    console.log(distance);
  }, []);

  const getDuration = (ms) => {
    let sec = ms / 1000;
    let hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;
    hours = hours < 10 ? "0" + hours : hours;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;
    return "" + hours + ":" + min + ":" + sec;
  };

  return (
    <Container maxWidth="xl">

      <Grid container sx={{ width: "100%", height: "100%" }}>
        <CenteredGrid xs={12} md={6} container item sx={{ flexDirection: "column"}}>
          <Typography variant="h5" color="initial">
            Running stats
          </Typography>
          <LineChart width={400} height={400} data={distance}>
            <Line type="monotone" dataKey="uv" stroke="#000" />
          </LineChart>
          <Typography variant="h6" color="initial">
            {total.distance} km
          </Typography>
        </CenteredGrid>
        <CenteredGrid
          container
          item
          xs={12}
          md={6}
          sx={{ paddingLeft: "0", flexDirection: "column" }}
        >
          <Typography variant="h5">Samcheok Marathon, South Korea</Typography>
          <Typography variant="subtitle1">
            Watch my finish, in 4 hours and 45 minutes{" "}
          </Typography>
          <Iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/d6ywzwNWXmE?start=15083"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></Iframe>
        </CenteredGrid>
      </Grid>
    </Container>
  );
};

export default Running;

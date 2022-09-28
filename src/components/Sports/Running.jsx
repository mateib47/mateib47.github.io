import React from "react";
import { runningData } from "../../data";
import { LineChart, Line } from "recharts";
import { useEffect,useState } from "react";
import Typography from '@mui/material/Typography'

const Running = () => {
const [time, setTime] = useState([])
const [distance, setDistance] = useState([])
const [total, setTotal] = useState({})

useEffect(() => {
  setTime(runningData.activities.map((x) => getDuration(x.active_duration_ms)));
  setDistance(runningData.activities.map((x) => ({uv : x.summaries.find((x) => x.metric == "distance").value})));
  setTotal({distance: distance.reduce((a,b)=>a+b.uv, 0)})
  console.log(distance)
}, [])

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
    <div>
      <LineChart width={400} height={400} data={distance}>
        <Line type="monotone" dataKey="uv" stroke="#000" />
      </LineChart>
      <Typography variant="h1" color="initial">{total.distance}</Typography>
    </div>
  );
};

export default Running;

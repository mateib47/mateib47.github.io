import Slide from "./Slide/Slide";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const LArrow = styled("img")(({ theme }) => ({
  position: "absolute",
  height: "50px",
  cursor: "pointer",
  left: "2%",
  transform: "rotateY(180deg)",
  zIndex: 1,
  [theme.breakpoints.up("md")]: {
    right: "10%",
  },
}));
const RArrow = styled("img")(({ theme }) => ({
  position: "absolute",
  height: "50px",
  cursor: "pointer",
  right: "2%",
  [theme.breakpoints.up("md")]: {
    right: "10%",
  },
}));

const Slider = styled(Box)({
  display: "flex",
  position: "absolute",
  left: "0",
  transition: "all 1s ease-out",
  maxHeight: "60%",
  padding: 0,
});

const MyBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  position: "relative",
  justifyContent: "center",
  alignContent: "center",
  padding: 0,
  margin: "auto",
}));

const Carousel = ({ list }) => {
  const length = list.length;
  const [current, setCurrent] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrent(current > 0 ? current - 1 : length - 1)
      : setCurrent(current < length - 1 ? current + 1 : 0);
  };

  return (
    <MyBox maxWidth="xl" id="works" justifyContent="center" alignItems="center">
      <LArrow
        src="assets/arrow.png"
        alt=""
        onClick={() => handleClick("left")}
      />
      <Slider
        className="slider"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {list.map((d) => (
          <Slide icon={d.icon} title={d.title} desc={d.desc} img={d.img} />
        ))}
      </Slider>
      <RArrow src="assets/arrow.png" alt="" onClick={() => handleClick()} />
    </MyBox>
  );
};

export default Carousel;

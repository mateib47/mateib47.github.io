import Slide from "./Slide/Slide";
import { useState } from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

const Arrow = styled("img")({
  position: "absolute",
  height: "50px",
  cursor: "pointer",
});
const Slider = styled(Box)({
  display: "flex",
  position: "absolute",
  left: "0",
  transition: "all 1s ease-out",
  maxHeight: "50%",
  padding: 0,
});

const Carousel = ({ list }) => {
  const length = list.length;
  const [current, setCurrent] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrent(current > 0 ? current - 1 : length - 1)
      : setCurrent(current < length - 1 ? current + 1 : 0);
  };

  return (
    <Box
      maxWidth="xl"
      id="works"
      sx={{
        display: "flex",
        backgroundColor: "primary.main",
        position: "relative",
        justifyContent: "center",
        alignContent: "center",
        padding: 0,
        margin: "auto",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Arrow
        src="assets/arrow.png"
        alt=""
        onClick={() => handleClick("left")}
        sx={{ left: "100px", transform: "rotateY(180deg)", zIndex: 1 }}
      />
      <Slider
        className="slider"
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {list.map((d) => (
          <Slide icon={d.icon} title={d.title} desc={d.desc} img={d.img} />
        ))}
      </Slider>
      <Arrow
        src="assets/arrow.png"
        alt=""
        onClick={() => handleClick()}
        sx={{ right: "100px" }}
      />
    </Box>
  );
};

export default Carousel;

import React from "react";
import { useEffect } from "react";
import Home from "../Utils/Home";
import Boxes from "../Utils/Boxes";
import Carousel from "../Utils/Carousel/Carousel";
import Experience from "./Experience";

const skills = [
  {
    header: "Win-win mindset",
    img: "globe.png",
    body: "Entering into negotiations with the goal of finding a solution that is mutually beneficial for both parties involved",
  },
  {
    header: "Active listening",
    img: "globe.png",
    body: "Paying close attention to the other party in order to fully understand their position, needs and underlying interests. This is achieved using techniques like mirroring, the use of calibrated questions and minimal encouragements.",
  },
  {
    header: "Negotiation intelligence",
    img: "globe.png",
    body: "Clear understanding of myself and my partner’s interests and options. Setting up a clear strategy and plan for achieving my negotiation objectives. ",
  },
  {
    header: "Negotiation intelligence",
    img: "globe.png",
    body: "Clear understanding of myself and my partner’s interests and options. Setting up a clear strategy and plan for achieving my negotiation objectives. ",
  },
];
const experience = [
  {
    id: 1,
    title: "NPT Graduate",
    desc: "Built a broad understanding of the negotiation process by attending all the theoretical sessions, reading recommended books and participating in countless case simulations.",
    img: "assets/npt_grad.jpeg",
  },
  {
    id: 2,
    title: "Wnr Finalist",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "assets/wnr.png",
  },
  {
    id: 3,
    title: "Title2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi repellat eos similique inventore quod est id odit, saepe impedit, dignissimos dolore architecto!",
    img: "http://mateibucur.me/images/survey.png",
  },
];

const Negotiation = ({ setItems }) => {
  useEffect(() => {
    setItems(["Intro", "Skills", ""]);
  }, []);
  return (
    <>
      <Home
        image={"negotiation.png"}
        header="International negotiator"
        text={
          "I enjoy the challenge of finding creative solutions to complex problems. I thrive on the opportunity to build relationships and trust with people from all walks of life, and I firmly believe that communication and collaboration are the key when it comes to creating mutually beneficial deals."
        }
      />
      <Boxes items={skills} />
      <Carousel list={experience} />
    </>
  );
};

export default Negotiation;

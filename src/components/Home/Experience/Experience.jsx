import "./experience.scss";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import HotelIcon from "@mui/icons-material/Hotel";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import SchoolIcon from "@mui/icons-material/School";
import Paper from "@mui/material/Paper";
import { experience } from "../../../data";
import { styled } from "@mui/material/styles";


const MyTimeline = styled(Timeline)(({ theme }) => ({
  transform: "rotate(90deg)",
  maxHeight:"100%"

}));

const MyTimelineContent = styled(TimelineContent)(({ theme }) => ({
  textAlign: "left",

}));

const MyTypography = styled(Typography)(({ theme }) => ({
  display: "inline-block",
  transform: "rotate(-90deg)",
  textAlign: "center",
  minWidth: 50

}));

const MyTimelineDot = styled(TimelineDot)(({ theme }) => ({
  display: "inline-block",
  transform: "rotate(-90deg)",
  textAlign: "center",
}));

const Experience = () => {
  return (
    <div className="experience">
      <Timeline
        position="alternate"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {experience.map((x) => (
          <ExperienceItem
            color={x.color}
            title={x.title}
            description={x.description}
            date={x.date}
            iconComponent={x.iconComponent}
          />
        ))}
      </Timeline>
    </div>
  );
};

const ExperienceItem = ({ color, title, description, date, iconComponent }) => {
  return (
    <>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color={color}
        >
          <Typography variant="body1">{date}</Typography>
          
        </TimelineOppositeContent>
        <TimelineSeparator sx={{ flex: "inherit" }}>
          <TimelineConnector />
          <TimelineDot>{iconComponent}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: "12px", px: 2 }}>
          <Typography variant="h6" component="span">
            {title}
          </Typography>
          <Typography>{description}</Typography>
        </TimelineContent>
      </TimelineItem>
    </>
  );
};

// const useStyles =makeStyles((theme) => ({
//   timeline: {

//   },
//   timelineContentContainer: {
//     textAlign: "left",
//   },
//   timelineContent: {
//     display: "inline-block",
//     transform: "rotate(-90deg)",
//     textAlign: "center",
//     minWidth: 50,
//   },
//   timelineIcon: {
//     transform: "rotate(-90deg)",
//   },
//   stretch: { height: "100%" },
//   item: { display: "flex", flexDirection: "column" },
// }));

export default Experience;

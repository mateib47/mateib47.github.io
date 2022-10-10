import "./projectExtended.scss";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Project from "../Project/Project";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from '@mui/material/Tooltip';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import { useState } from "react";

const ProjectExtended = ({ project, setProjectDisplay }) => {
  const [open, setOpen] = useState(false);

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    navigator.clipboard.writeText(project.homepage);
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 1000);
  };

  return (
    <Card sx={{ maxWidth: 545, height: "80%", width: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {project.name
              .split(" ")
              .slice(0, 2)
              .reduce((a, b) => a + b[0], "")}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="close"
            onClick={() => {
              setProjectDisplay(null);
            }}
          >
            <CloseIcon />
          </IconButton>
        }
        title={project.name}
        subheader="July 2022 - August 2022"
      />
      {/**TODO ADD DATE OF THE PROJECT*/}
      {project.imgLink ? (
        <CardMedia
          component="img"
          height="194"
          image={project.imgLink}
          alt="Project photo"
        />
      ) : (
        <></>
      )}

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Stack direction="row" spacing={1}>
          {project.topics.map((x) => (
            <Chip label={x} />
          ))}
        </Stack>
      </CardContent>
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
        <StarIcon />
      </IconButton> */}
        <IconButton size="small" target="_blank" href={project.html_url}>
          <GitHubIcon />
        </IconButton>
        <IconButton size="small" target="_blank" href={project.homepage}>
          <WebIcon />
        </IconButton>
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="Link copied to clipboard"
            >
              <IconButton
                aria-label="share"
                onClick={handleTooltipOpen}
              >
                <ShareIcon />
              </IconButton>
            </Tooltip>
          </div>
        </ClickAwayListener>
      </CardActions>
    </Card>
  );
};

export default ProjectExtended;

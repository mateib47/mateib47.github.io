import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const Project = ({
  id,
  title,
  description,
  setProjectDisplay,
  projectObj,
}) => {
  return (
    <Card
      key={id}
      sx={{ maxWidth: 245, maxHeight: 354, margin: 1 }}
      className=""
    >
      <CardActionArea
        onClick={() => {
          setProjectDisplay(projectObj);
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description ? description.split(" ").slice(0,6).join(" ")+"..." : ""}
          </Typography>
          <Stack direction="row" spacing={1}>
            {projectObj.topics.map((x) => (
              <Chip label={x} />
            ))}
          </Stack> 
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">
          <GitHubIcon />
        </Button>
        <Button size="small">Live page</Button>
      </CardActions>
    </Card>
  );
};

export default Project;

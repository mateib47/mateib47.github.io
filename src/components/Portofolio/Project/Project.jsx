import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

const Project = ({ id, img, title, description, setProjectDisplay, projectObj }) => {
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
        {img ? (
          <CardMedia
            component="img"
            alt="Project image"
            height="140"
            image={img}
          />
        ) : (
          <></>
        )}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description ? description : ""}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">Live page</Button>
      </CardActions>
    </Card>
  );
};

export default Project;

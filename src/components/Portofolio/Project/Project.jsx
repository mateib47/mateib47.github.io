import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Project = ({ key, img, title, description }) => {
  return (
    <Card sx={{ maxWidth: 245, maxHeight: 354, margin: 1 }} className="">
      {img ? <CardMedia
        component="img"
        alt="Project image"
        height="140"
        image={img}
      /> : <></>}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description ? description : ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Github</Button>
        <Button size="small">Live page</Button>
      </CardActions>
    </Card>
  );
};

export default Project;

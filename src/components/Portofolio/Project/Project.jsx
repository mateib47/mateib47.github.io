import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Project = ({ key, img, title }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className="item">
      <CardMedia
        component="img"
        alt="Project image"
        height="140"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio, praesentium quia! Est cumque at sint veniam, nostrum ad accusamus? Neque consequuntur molestiae maxime at. Deleniti vitae quod aspernatur nostrum iure.
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

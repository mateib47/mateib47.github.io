import "./languages.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TerminalIcon from "@mui/icons-material/Terminal";
import Box from '@mui/material/Box';


const Languages = () => {
  const data = ["Javascript", "HTML", "Css", "Java", "Python", "C++"];
  return (
    <div className="languages">
      <div className="left">
        <div className="imgContainer">
        <TerminalIcon sx={{fontSize: '290px'}} />

        </div>
      </div>
      <div className="right">
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {data.map((x) => (
            <ListItem alignItems="flex-centre">
              <ListItemAvatar>
                <Avatar alt="Language icon" />
              </ListItemAvatar>
              <ListItemText primary={x} />
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default Languages;

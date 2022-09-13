import "./languages.scss";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import TerminalIcon from "@mui/icons-material/Terminal";
import Box from "@mui/material/Box";
import swift from "programming-languages-logos/src/swift/swift.svg";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import Container from "@mui/material/Container";
import javascript from "programming-languages-logos/src/javascript/javascript.svg";
import java from "programming-languages-logos/src/java/java.png";
import { useTheme } from "@mui/material/styles";

//TODO add all logos

const Languages = () => {
  const theme = useTheme();

  const heights = [150, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 50, 80];

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const MyBox = styled(Box)(({ theme }) => ({
    width: "90%",
    margin:'auto',
    height:'80%',
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
  }));

  return (
    <div className="languages" id="languages">
      <MyBox
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Masonry columns={{xs:3,md:4}} spacing={2}>
          {heights.map((height, index) => (
            <Item key={index} sx={{ height, overflow: "hidden" }}>
              <img src={java} style={{ height: "90%" }} />
            </Item>
          ))}
        </Masonry>
      </MyBox>
    </div>
  );
};

export default Languages;

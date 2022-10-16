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
import { useTheme } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import { heights } from "../../../data";

//TODO add all logos

const Languages = () => {
  const theme = useTheme();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  const MyBox = styled(Box)(({ theme }) => ({
    width: "90%",
    margin: "auto",
    [theme.breakpoints.up("md")]: {
      width: "70%",
      height: "80%",
    },
  }));

  return (
    <div className="languages" id="languages">
      <Typography
        variant="h3"
        color="primary"
        align="center"
        sx={{ m: 2, overflow: "hidden", fontWeight: 500 }}
      >
        Programming languages, frameworks and libraries
      </Typography>
      <MyBox display="flex" justifyContent="center" alignItems="center">
        <Masonry columns={{ xs: 2, md: 4, lg: 5 }} spacing={2} sx={{ my: 2 }}>
          {heights.map((x, index) => (
            <Tooltip title={x.descr}>
              <Item key={index} sx={{ height: x.h, overflow: "hidden" }}>
                <img src={x.logo} style={{ height: "90%" }} />
              </Item>
            </Tooltip>
          ))}
        </Masonry>
      </MyBox>
    </div>
  );
};

export default Languages;

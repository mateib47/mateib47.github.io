import { Person, Mail, LinkedIn, GitHub, Folder } from "@material-ui/icons";
import { person } from "../../data";
import "./sidebar.scss";
import Button from "@mui/material/Button";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button href={`mailto:${person.email}`} target="_blank" >
        <Mail className="icon" />
      </Button>
      <Button href={person.linkedIn} target="_blank">
        <LinkedIn className="icon" />
      </Button>
      <Button href={person.linkedIn} target="_blank"> 
        <GitHub className="icon" />
      </Button>
    </div>
  );
};

export default Sidebar;

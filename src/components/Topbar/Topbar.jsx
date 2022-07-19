import "./topbar.scss";
import {Person, Mail, LinkedIn, GitHub,Folder} from '@material-ui/icons';
import { person } from "../../data";


const Topbar = ({open, setOpen}) => {
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
//fetch from server the contact details data and have a map that renders them
//add cv and fetch it from server
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#home" className="logo">matei.</a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setOpen(!open)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Topbar;

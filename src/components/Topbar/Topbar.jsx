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
          <div className="itemContainer">
            <Person className="icon"/>
            <span>{person.phone}</span>
          </div>
          <div className="itemContainer" onClick={(e) => {
                openInNewTab(`mailto:${person.email}`)
            }}>
            <Mail className="icon"/>
            <span>{person.email}</span>
          </div>
          <div className="itemContainer" onClick={(e) => {
                openInNewTab(person.linkedIn)
            }}>
            <LinkedIn className="icon"/>
            <span>{person.name}</span>
          </div>
          <div className="itemContainer" onClick={(e) => {
                openInNewTab(person.github)
            }}>
            <GitHub className="icon"/>
            <span>{person.github}</span> 
  {/* fix */}
          </div>
          <div className="itemContainer">
            <Folder className="icon"/>
            <span>cv</span>
          </div>
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

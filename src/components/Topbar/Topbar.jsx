import "./topbar.scss";
import {Person, Mail, LinkedIn, GitHub,Folder} from '@material-ui/icons'

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
            <span>+40 722 222 251</span>
          </div>
          <div className="itemContainer" onClick={(e) => {
                openInNewTab('mailto:bucur.matei@yahoo.com')
            }}>
            <Mail className="icon"/>
            <span>matei@bucur.com</span>
          </div>
          <div className="itemContainer" onClick={(e) => {
                openInNewTab('https://www.linkedin.com/in/matei-bucur-57a591207/')
            }}>
            <LinkedIn className="icon"/>
            <span>matei bucur</span>
          </div>
          <div className="itemContainer" onClick={(e) => {
                openInNewTab('https://github.com/mateib47')
            }}>
            <GitHub className="icon"/>
            <span>mateib47</span>
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

import "./topbar.scss";
import {Person, Mail} from '@material-ui/icons'

const Topbar = ({open, setOpen}) => {
  return (
    <div className={"topbar " + (open && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">matei.</a>
          <div className="itemContainer">
            <Person className="icon"/>
            <span>+40 722 222 251</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon"/>
            <span>matei@bucur.com</span>
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

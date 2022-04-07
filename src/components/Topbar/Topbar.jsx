import "./topbar.scss";
import {Person, Mail} from '@material-ui/icons'

const Topbar = () => {
  return (
    <div className="topbar">
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
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Topbar;

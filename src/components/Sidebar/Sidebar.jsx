
import {Person, Mail, LinkedIn, GitHub,Folder} from '@material-ui/icons';
import { person } from "../../data";
import './sidebar.scss'

const Sidebar = () => {
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

  return (
    <div className='sidebar'>
      <div className='line'></div>
      <div
        className="itemContainer"
        onClick={(e) => {
          openInNewTab(`mailto:${person.email}`);
        }}
      >
        <Mail className="icon" />
      </div>
      <div
        className="itemContainer"
        onClick={(e) => {
          openInNewTab(person.linkedIn);
        }}
      >
        <LinkedIn className="icon" />
      </div>
      <div
        className="itemContainer"
        onClick={(e) => {
          openInNewTab(person.github);
        }}
      >
        <GitHub className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;

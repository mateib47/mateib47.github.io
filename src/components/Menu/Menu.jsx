import React from 'react';
import "./menu.scss";

const elems = [];

const Menu = ({open, setOpen, items}) => {
  return (
    <div className={"menu " + (open && "active")}>
        <ul>
            {
            items.map((a) => <li key={items.indexOf(a)} onClick={() => setOpen(false)}>
                <a href={"#" + a.charAt(0).toLowerCase() + a.slice(1)}>{a}</a>
            </li>)}
        </ul>
    </div>
  )
}

export default Menu
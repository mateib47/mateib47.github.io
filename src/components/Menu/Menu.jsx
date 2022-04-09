import React from 'react';
import "./menu.scss";

const Menu = ({open, setOpen}) => {
  return (
    <div className={"menu " + (open && "active")}>
        <ul>
            <li>
                <a href="#intro">Home</a>
            </li>
            <li>
                <a href="#portofolio">Portofolio</a>
            </li>
            <li>
                <a href="#works">Works</a>
            </li>
            <li>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}

export default Menu
import React from 'react'
import {Intro, Topbar, Works, Portofolio, Testimonials, Contact, Menu} from './components';
import './app.scss'
import { useState } from 'react';


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='app'>
      <Topbar open={menuOpen} setOpen={setMenuOpen} />
      <Menu  open={menuOpen} setOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portofolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default App
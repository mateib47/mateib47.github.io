import React from 'react'
import {Intro, Topbar, Works, Portofolio, Testimonials, Contact} from './components';
import './app.scss'


const App = () => {
  return (
    <div className='app'>
      <Topbar/>
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
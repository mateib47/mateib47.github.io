import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Testimonials from './Testimonials/Testimonials'
import Works from './Works/Works'
import { useEffect } from 'react'
import Experience from './Experience/Experience'

const Home = ({setItems}) => {
useEffect(() => {
  setItems(['Home', 'About','Experience', 'Works', 'Testimonials', 'Contact']);
}, [])


  return (
    <>
        <Intro />
        <About />
        <Experience/>
        <Works />
        <Testimonials />
        <Contact />
    </>
  )
}

export default Home
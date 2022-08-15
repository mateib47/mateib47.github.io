import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Testimonials from './Testimonials/Testimonials'
import Works from './Works/Works'
import { useEffect } from 'react'

const Home = ({setItems}) => {
useEffect(() => {
  setItems(['Home', 'About', 'Works', 'Testimonials', 'Contact']);
}, [])


  return (
    <>
        <Intro />
        <About />
        <Works />
        <Testimonials />
        <Contact />
    </>
  )
}

export default Home
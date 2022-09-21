import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Testimonials from './Testimonials/Testimonials'
import { worksList } from '../../data'
import { useEffect } from 'react'
import Experience from './Experience/Experience'
import Carousel from '../Utils/Carousel/Carousel'

const Home = ({setItems}) => {
useEffect(() => {
  setItems(['Home', 'About','Experience', 'Works', 'Testimonials', 'Contact']);
}, [])


  return (
    <>
        <Intro />
        <About />
        <Experience/>
        <Carousel list = {worksList} />
        {/* <Testimonials /> */}
        <Contact />
    </>
  )
}

export default Home
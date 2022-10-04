import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Intro from './Intro/Intro'
import Testimonials from './Testimonials/Testimonials'
import { worksList } from '../../data'
import { useEffect } from 'react'
import Experience from './Experience/Experience'
import Carousel from '../Utils/Carousel/Carousel'
import RawStats from './RawStats'

const Home = ({setItems}) => {
useEffect(() => {
  setItems(['Intro', 'About','Experience', 'Highlights', 'Contact']);
}, [])


  return (
    <>
        <Intro />
        <About />
        <Experience/>
        <Carousel id="highlights" list = {worksList} />
        {/* <Testimonials /> */}
        {/* <RawStats /> */}
        <Contact />
    </>
  )
}

export default Home
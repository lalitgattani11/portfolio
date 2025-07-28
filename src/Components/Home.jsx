import React from 'react'
import Navbar from './Navbar'
import LandingPage from './LandingPage'
import About from './About'
import Project from './Project'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <>
     <Navbar/>
     <LandingPage/>
     <About/>
     <Project/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home
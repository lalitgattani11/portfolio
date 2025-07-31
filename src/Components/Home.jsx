import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import LandingPage from "./LandingPage";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";

function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <>
      <Navbar />
      <LandingPage />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;

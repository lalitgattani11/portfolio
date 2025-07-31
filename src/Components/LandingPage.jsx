import React from "react";

function LandingPage() {
  return (
    <div id="home" className="bg-[url('/images/bg.svg')] bg-no-repeat bg-cover bg-center h-[80vh] flex items-center justify-center">
      <div data-aos = "fade-up" className="text-center px-4">
        <h1 className="text-5xl font-extrabold uppercase  mb-4 text-black">
          Hey, I'm Lalit Gattani
        </h1>
        <br />
        <p data-aos = "fade-up" className="text-xl text-gray-900 mb-6 max-w-2xl mx-auto">
          I'm a passionate frontend developer focused on creating responsive,
          user-friendly web applications using modern technologies. I bring
          ideas to life with clean code, creative design, and seamless user
          experiences.
        </p>
        <br />
        <a data-aos = "fade-up"
          href="#projects"
          className="bg-[#5b2bc4] rounded-md uppercase text-white text-xl font-semibold px-20 py-5 tracking-wider"
        >
          projects
        </a>
      </div>
    </div>
  );
}

export default LandingPage;

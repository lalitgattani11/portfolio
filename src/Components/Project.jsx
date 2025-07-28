import React from "react";

function Project() {
  return (
    <div id="projects" className="pt-32 bg-zinc-200">
      <div className="text-center px-4 pb-10">
        <h1 className="text-4xl font-bold uppercase mb-4 text-black underline decoration-[#5b2bc4] underline-offset-8 decoration-2">
          Projects
        </h1>
        <p className="text-xl text-gray-950 mb-6 max-w-2xl mx-auto">
          Explore some of my featured projects that showcase my skills in
          frontend development. Each project reflects clean code, responsive
          design, and practical user experience.
        </p>
      </div>

      <div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-12">
          <div className="w-full max-w-[650px]">
            <img
              src="/images/project1.png"
              alt="Koppee Project"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Koppee – Modern Coffee Shop Website
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              Koppee is a modern and responsive coffee shop website built with
              React and Tailwind CSS. It features smooth navigation, stylish
              sections, and an engaging layout that highlights the brand’s
              identity.
            </p>
            <a
              href="https://koppee-coffee.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5b2bc4] hover:bg-[#4a20a5] transition-colors text-white px-8 py-3 rounded-md text-lg font-semibold uppercase inline-block"
            >
              Website
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-12">
          <div className="w-full max-w-[650px]">
            <img
              src="/images/project2.png"
              alt="OchiDesign Project"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              OchiDesign – Creative Design Agency
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              A responsive frontend inspired by Ochi.Design, showcasing clean
              layouts, bold typography, and smooth animations using React and
              Tailwind CSS to reflect modern UI/UX practices.
            </p>
            <a
              href="https://ochidesign-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5b2bc4] hover:bg-[#4a20a5] transition-colors text-white px-8 py-3 rounded-md text-lg font-semibold uppercase inline-block"
            >
              Website
            </a>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-12">
          <div className="w-full max-w-[600px]">
            <img
              src="/images/project3.png"
              alt="Digital Hub Project"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="text-center lg:text-left max-w-xl">
            <h2 className="text-3xl font-bold mb-4">
              Digital Hub – Digital Marketing Website
            </h2>
            <p className="text-gray-700 text-lg mb-6">
              DigitalHub is a modern, responsive website crafted to present
              digital services with clarity and impact. Built using HTML, CSS,
              Bootstrap, and JavaScript, it delivers a clean layout, smooth
              interactions, and a user-friendly experience across devices.
            </p>
            <a
              href="https://digital-marketing-hub.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#5b2bc4] hover:bg-[#4a20a5] transition-colors text-white px-8 py-3 rounded-md text-lg font-semibold uppercase inline-block"
            >
              Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;

import React from "react";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Framer Motion",
  "GIT",
  "Github",
  "Responsive Design",
  "Core Java",
];

function About() {
  return (
    <div id="about" className="pt-32 bg-zinc-100">
      <div data-aos = "fade-up" className="text-center px-4">
        <h1 className="text-4xl font-bold uppercase mb-4 text-black underline decoration-[#5b2bc4] underline-offset-8 decoration-2">
          About Me
        </h1>
        <br />
        <p className="text-xl text-gray-950 mb-6 max-w-2xl mx-auto">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </p>
      </div>

      <div className="py-16 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10 items-start">
          {/* Left: Get to Know Me */}
          <div  data-aos = "fade-right"  className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold text-gray-800">
              Get to know me!
            </h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              Hello! I’m Lalit Gattani, a frontend developer passionate about
              crafting responsive and user-focused websites. Skilled in React,
              Tailwind CSS, and JavaScript, I enjoy turning ideas into clean,
              functional designs. Driven by curiosity, I’m always exploring new
              tools to enhance performance and user experience.
              <br />I turn ideas into seamless digital experiences with clean,
              efficient code. Passionate about UI/UX, I focus on detail,
              accessibility, and continuous improvement in every project.
            </p>
            <p className="text-gray-600 leading-relaxed text-xl">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p> <br />
            <a
              href=""
              className="bg-[#5b2bc4] hover:bg-[#4a20a5] transition-colors text-white px-8 py-3 rounded-md text-lg font-semibold uppercase"
            >
              contact
            </a>
          </div>

          {/* Right: Skills */}
          <div  data-aos = "fade-left"  className="md:w-1/2">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              My Skills
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-5 py-2.5 rounded-lg text-base font-medium shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

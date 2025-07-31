import React from "react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white px-6 pt-16 pb-6">
      <div data-aos = "fade-up" className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20 lg:gap-40">
        {/* Left: Name and Description */}
        <div className="md:w-2/3">
          <h2 className="uppercase text-xl font-bold mb-3 text-center md:text-left">Lalit Gattani</h2>
          <p className="text-md text-gray-300 leading-relaxed">
            A frontend focused Web Developer building the frontend of websites and web applications
            that leads to the success of the overall product.
          </p>
        </div>

        {/* Right: Social Links */}
        <div className="w-full md:w-1/3">
          <h2 className="uppercase text-xl font-bold mb-3 text-center md:text-left">Social</h2>
          <div className="flex justify-center md:justify-start gap-6 text-2xl mt-2">
            <a
              href="https://www.linkedin.com/in/lalit-gattani/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/lalitgattani11"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/lalit_maheshwari_18/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © 2025 · Made with ❤️ by <span className="text-white font-semibold">Lalit Gattani</span>
      </div>
    </footer>
  );
}

export default Footer;

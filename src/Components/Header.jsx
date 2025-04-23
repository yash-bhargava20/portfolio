import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      className="bg-slate-900 sticky z-50 top-0 left-0"
    >
      <div className="w-full mx-auto px-14">
        <nav className="flex items-center justify-between w-full px-10 py-4">
          <h1 className="text-xl font-semibold">Portfolio</h1>
          <ul className="flex gap-6">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                My Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Skills
              </button>
            </li>

            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-normal text-base px-1 py-.5 hover:text-blue-500 transition duration-300 ease-in-out"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;

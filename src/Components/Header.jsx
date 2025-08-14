import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0, ease: "easeOut" }}
      className="bg-slate-900  sticky z-50 top-0 left-0"
    >
      <div className="w-full mx-auto px-6 md:px-10">
        <nav className="flex items-center justify-between w-full px-4 md:px-10 py-4">
          <h1 className="text-xl font-semibold text-white">Portfolio</h1>
          {/* pc */}
          <ul className="hidden md:flex gap-6 text-white">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="font-normal text-base px-1 py-.5 hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="font-normal text-base px-1 py-.5 hover:text-purple-400 transition duration-300 ease-in-out"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="font-normal text-base px-1 py-.5 hover:text-purple-400 transition duration-300 ease-in-out"
              >
                My Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="font-normal text-base px-1 py-.5 hover:text-purple-400 transition duration-300 ease-in-out "
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="font-normal text-base px-1 py-.5 hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Contact Us
              </button>
            </li>
          </ul>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-4 pb-4 px-4 text-white">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="text-base hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-base hover:text-purple-400 transition duration-300 ease-in-out"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-base hover:text-purple-400 transition duration-300 ease-in-out"
              >
                My Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-base hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-base hover:text-purple-400 transition duration-300 ease-in-out"
              >
                Contact Us
              </button>
            </li>
          </ul>
        )}
      </div>
    </motion.header>
  );
};

export default Header;

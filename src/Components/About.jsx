import React, { useState } from "react";
import { motion } from "framer-motion";
import image from "../assets/Yash.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      id="about"
      className="font-poppins py-10 px-4 sm:px-6 md:px-10 w-full min-h-auto lg:min-h-screen flex flex-col gap-8 justify-center items-center"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-3xl sm:text-4xl text-center font-bold mb-8"
      >
        About Me
      </motion.h2>

      <div className="z-10 grid grid-cols-1 lg:grid-cols-[1fr,2fr] gap-10 md:mx-10 items-center">
        {/* Image */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] mx-auto"
        >
          <img
            src={image}
            className="relative z-10 w-full h-full rounded-xl object-cover"
            alt="Profile"
          />
          <div className="bg-slate-400 bg-opacity-40 backdrop-blur-md w-full h-full rounded-lg absolute top-3 left-3 z-0"></div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-base sm:text-lg font-light px-2 py-2 leading-relaxed"
        >
          <p className="text-center lg:text-justify">
            I am a passionate and dedicated Computer Science student eager to
            kickstart my career in software development...
          </p>

          <div className="mt-10 text-white flex flex-wrap gap-6 justify-center lg:justify-start">
            <button
              onClick={() =>
                setActive(active === "education" ? null : "education")
              }
              className="flex items-center gap-2 hover:text-blue-400"
            >
              Education <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
            <button
              onClick={() =>
                setActive(active === "experience" ? null : "experience")
              }
              className="flex items-center gap-2 hover:text-blue-400"
            >
              Experience <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </button>
          </div>

          {active === "education" && (
            <div className="bg-gray-600 rounded-lg w-full max-w-xs mt-3 p-3">
              <h2>Education</h2>
            </div>
          )}
          {active === "experience" && (
            <div className="bg-gray-600 rounded-lg w-full max-w-xs mt-3 p-3">
              <h2>Experience</h2>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

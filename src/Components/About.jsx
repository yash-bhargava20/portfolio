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
      className="font-poppins py-20 px-10 m-3 w-full flex flex-col gap-8 h-screen justify-center items-center"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-4xl text-center font-bold mb-8"
      >
        About Me
      </motion.h2>

      <div className="z-10 grid grid-cols-[1fr,2fr] gap-10 mx-10">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="relative w-[300px] h-[300px]"
        >
          <img
            src={image}
            className="relative z-10 w-full h-full rounded-xl object-cover"
            alt="Profile"
          />
          <div className="bg-slate-400 bg-opacity-40 backdrop-blur-md w-full h-full rounded-lg absolute top-3 left-3 z-0"></div>
        </motion.div>

        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="text-lg font-light px-3 py-2 leading-relaxed"
        >
          <p>
            I am a passionate and dedicated Computer Science student eager to
            kickstart my career in software development. With a strong
            foundation in programming, data structures, and web development, I
            strive to create efficient and user-friendly solutions. I have
            hands-on experience with JavaScript, React.js, Node.js, HTML/CSS and
            I am constantly learning new technologies to stay updated. As a
            quick learner with a problem-solving mindset, I am enthusiastic
            about contributing to innovative projects and growing in the tech
            industry.
          </p>

          <div className="mt-5 text-white flex justify-start items-center gap-6 w-[100%]">
            <button
              onClick={() =>
                setActive(active === "education" ? null : "education")
              }
            >
              Education
              <span className="ml-2">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </button>
            <button
              onClick={() =>
                setActive(active === "experience" ? null : "experience")
              }
            >
              Experience
              <span className="ml-2">
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </span>
            </button>
          </div>

          {active === "education" && (
            <div className="bg-gray-600 rounded-lg w-[300px] mt-3 p-3">
              <h2>Education</h2>
            </div>
          )}
          {active === "experience" && (
            <div className="bg-gray-600 rounded-lg w-[300px] mt-3 p-3">
              <h2>Experience</h2>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default About;

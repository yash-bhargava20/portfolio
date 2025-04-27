import React from "react";
import { motion } from "framer-motion";

const techIcons = {
  ReactJS: "devicon-react-original colored",
  "Tailwind CSS": "devicon-tailwindcss-original colored",
  NextJS: "devicon-nextjs-original colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  NodeJS: "devicon-nodejs-plain colored",
  "Express JS": "devicon-express-original",
  "Mongo DB": "devicon-mongodb-plain colored",
  "My SQL": "devicon-mysql-plain colored",
  JWT: "devicon-jwt-plain colored", // Added missing icon class (optional)
};

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="font-poppins font-light w-full min-h-screen flex flex-col justify-center items-center  px-4 py-10 md:px-10"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-4xl text-center font-bold"
        >
          Skills
        </motion.h2>

        <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16 w-full max-w-7xl ">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut", delay: 0.1 }}
            className="text-white space-y-5 px-4 md:px-0"
          >
            <h3 className="text-4xl font-semibold text-center md:text-left">
              What I Can Do
            </h3>
            <p className="text-gray-300 text-center md:text-left">
              I have hands-on experience building modern frontend applications
              and robust backend services. I enjoy learning new technologies and
              solving real-world problems.
            </p>
            <p className="text-gray-300 text-center md:text-left">
              Scroll through to explore the tools and technologies I use
              regularly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
            {/* Frontend Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg md:h-[420px] flex flex-col border border-gray-700 bg-opacity-40 backdrop-blur-md"
            >
              <h2 className="text-white text-center text-2xl font-semibold mb-4">
                Frontend
              </h2>
              <div className="flex flex-wrap justify-center items-start gap-3 flex-grow overflow-hidden">
                {[
                  "ReactJS",
                  "Tailwind CSS",
                  "NextJS",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm"
                  >
                    <i className={techIcons[tech] + " text-xl"}></i>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg md:h-[420px] flex flex-col border border-gray-700 bg-opacity-40 backdrop-blur-md"
            >
              <h2 className="text-white text-center text-2xl font-semibold mb-4">
                Backend
              </h2>
              <div className="flex flex-wrap justify-center items-start gap-3 flex-grow overflow-hidden">
                {["NodeJS", "Express JS", "Mongo DB", "My SQL", "JWT"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg text-sm"
                    >
                      <i className={techIcons[tech] + " text-xl"}></i>
                      {tech}
                    </span>
                  )
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;

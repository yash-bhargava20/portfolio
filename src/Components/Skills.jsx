import React from "react";
import { motion } from "framer-motion";
const techIcons = {
  ReactJS: "devicon-react-original colored",
  "TailWind CSS": "devicon-tailwindcss-original colored",
  NextJS: "devicon-nextjs-original colored",
  HTML: "devicon-html5-plain colored",
  CSS: "devicon-css3-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  NodeJS: "devicon-nodejs-plain colored",
  "Express JS": "devicon-express-original",
  "Mongo DB": "devicon-mongodb-plain colored",
  "My SQL": "devicon-mysql-plain colored",
};

const Skills = () => {
  return (
    <>
      <section
        id="skills"
        className="font-poppins font-light w-full h-screen flex flex-col justify-center items-center px-10 py-20"
      >
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="z-10 text-4xl text-center font-bold"
        >
          Skills
        </motion.h2>

        <div className="z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeOut", delay: 0.1 }}
            className="text-white max-w-md space-y-5"
          >
            <h3 className="text-4xl font-semibold">What I Can Do</h3>
            <p className="text-gray-300">
              I have hands-on experience building modern frontend applications
              and robust backend services. I enjoy learning new technologies and
              solving real-world problems.
            </p>
            <p className="text-gray-300">
              Scroll through to explore the tools and technologies I use
              regularly.
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg w-80 border border-gray-700 bg-opacity-40 backdrop-blur-md"
            >
              <h2 className="text-white text-center text-2xl font-semibold mb-4">
                Frontend
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  "ReactJS",
                  "TailWind CSS",
                  "NextJS",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg"
                  >
                    <i className={techIcons[tech] + " text-xl"}></i>
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="bg-gray-800 rounded-xl border border-gray-700 p-6 w-80 shadow-lg bg-opacity-40 backdrop-blur-md"
            >
              <h2 className="text-white text-center text-2xl font-semibold mb-4">
                Backend
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {["NodeJS", "Express JS", "Mongo DB", "My SQL", "JWT"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg"
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

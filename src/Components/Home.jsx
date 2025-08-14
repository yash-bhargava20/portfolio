import React from "react";
import Social from "./Social";
import Data from "./Data";
import image from "../assets/Yash.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="flex justify-center items-center w-full px-4 md:px-10 min-h-[80vh] lg:min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 w-full max-w-7xl"
        >
          <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between md:gap-8 mt-20 md:mt-0">
            <div className="flex justify-center mb-8 md:mb-0 md:w-1/3">
              <img
                src={image}
                className="h-40 w-40 md:h-72 md:w-72 sm:h-56 sm:w-56 rounded-full object-cover animate-borderRadius"
                alt="Profile"
              />
            </div>

            <div className="flex  md:flex-row justify-between items-center gap-8 md:w-9/12  p-2">
              {/* Social component */}
              <div className="flex justify-center md:p-2">
                <Social />
              </div>

              {/* Data component */}
              <div className="flex-grow w-full md:max-w-2xl md:p-5 ">
                <Data />
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;

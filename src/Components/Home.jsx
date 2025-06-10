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
          <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between md:gap-8">
            <div className="flex justify-center mb-8 md:mb-0 md:w-1/3">
              <img
                src={image}
                className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full object-cover animate-borderRadius"
                alt="Profile"
              />
            </div>

            <div className="flex md:flex-row justify-between items-center gap-8 md:w-9/12 m-4">
              {/* Social component */}
              <div className="flex justify-center md:p-2">
                <Social />
              </div>

              {/* Data component */}
              <div className="flex-grow md:max-w-[700px] md:p-5 ">
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

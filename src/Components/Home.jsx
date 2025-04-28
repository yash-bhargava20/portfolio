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
        className="flex justify-center items-center min-h-screen px-4 md:px-10"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 w-full max-w-7xl"
        >
          {/* Mobile: Stacked layout with image on top, Social and Data side by side below */}
          {/* Desktop: Image on right, Social and Data on left */}
          <div className="flex flex-col md:flex-row-reverse md:items-center md:justify-between md:gap-8">
            {/* Image - full width on mobile, right-aligned on desktop */}
            <div className="flex justify-center mb-8 md:mb-0 md:w-1/3">
              <img
                src={image}
                className="h-[250px] w-[250px] md:h-[300px] md:w-[300px] rounded-full object-cover animate-borderRadius"
                alt="Profile"
              />
            </div>

            {/* Container for Social and Data - left side on desktop */}
            <div className="flex flex-row justify-between items-center gap-8 md:w-9/12">
              {/* Social component */}
              <div className="flex justify-center md:p-2">
                <Social />
              </div>

              {/* Data component */}
              <div className="flex-grow md:p-5 ">
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

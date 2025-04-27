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
          className="z-10 w-full max-w-7xl flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-3 md:place-items-center"
        >
          {/* Image at top on mobile */}
          <div className="flex justify-center items-center">
            <img
              src={image}
              className="h-[250px] w-[250px] rounded-full object-cover animate-borderRadius"
              alt="Profile"
            />
          </div>

          {/* Social and Data appear side by side */}
          <div className="flex flex-row flex-wrap gap-8 items-center justify-center w-full col-span-2">
            <Social />
            <Data />
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;

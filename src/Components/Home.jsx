import React from "react";
import Social from "./Social";
import Data from "./Data";
import image from "../assets/Yash.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
      <section id="home" className="flex justify-center h-screen  m-0 p-0">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 w-full h-[80%] max-w-7xl px-10 py-10 grid grid-cols-[.7fr,2fr,1fr] gap-8 place-items-center"
        >
          <Social />
          <Data />
          <div>
            <div>
              <img
                src={image}
                className="h-[300px] w-[500px] animate-borderRadius"
              ></img>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;

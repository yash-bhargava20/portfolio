import React, { useRef } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // handle your email logic here
  };

  return (
    <section
      id="contact"
      className="font-poppins py-10 px-5 md:px-10 flex flex-col w-full gap-8 h-screen justify-center items-center"
    >
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="z-10 text-center font-bold text-4xl mb-8"
      >
        Contact Me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.1 }}
        className="z-10 w-full max-w-3xl p-6 bg-gray-700 bg-opacity-40 backdrop-blur-md rounded-lg shadow-md"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-6"
        >
          <h1 className="text-3xl font-bold">
            Contact <span className="text-purple-500">Me Here</span>
          </h1>
        </motion.div>

        <form ref={form} onSubmit={sendEmail}>
          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              name="user_name"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <label htmlFor="email" className="font-medium text-sm mb-1">
              Email:
            </label>
            <input
              type="email"
              name="user_email"
              id="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-gray-600 text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
              required
            />
          </motion.div>

          <motion.div
            className="mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
              required
            ></textarea>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            <button
              type="submit"
              className="px-6 py-2 text-white rounded-lg transition duration-300 border border-white shadow-insetBlack hover:bg-purple-900"
            >
              Send Message
            </button>
          </motion.div>
        </form>
      </motion.div>
    </section>
  );
};

export default ContactForm;

import React from "react";

const ContactForm = () => {
  return (
    <section className="py-20 px-10 m-3 flex flex-col w-full gap-8 h-screen justify-center items-center">
      <h1 className="z-10 text-center font-bold font text-4xl mb-8">
        Contact Me
      </h1>
      <div className="z-10 w-full max-w-3xl p-6 bg-gray-700 bg-opacity-40 backdrop-blur-md  rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold">
            Contact <span className="text-purple-500">Me Here</span>
          </h1>
        </div>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="font-medium text-sm mb-1">
              Email:
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              className="w-full px-4 py-2 rounded-lg bg-slate-800 border border-gray-600 text-sm focus:outline-none focus:ring-1  focus:ring-purple-400 focus:border-purple-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message:
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              rows="4"
              className="w-full px-4 py-2 bg-slate-800 border border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-purple-400 focus:border-purple-400"
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 text-white rounded-lg transition duration-300 border border-white shadow-insetBlack hover:bg-purple-900"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

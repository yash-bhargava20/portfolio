import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const data = [
  {
    title: "Spotify Clone",
    tech: ["ReactJS", "Tailwind CSS", "Redux", "Spotify API"],
  },
  {
    title: "Chatbot",
    tech: ["ReactJS", "NodeJS", "Express", "OpenAI API", "Socket.IO"],
  },
  {
    title: "Expense Tracker",
    tech: ["ReactJS", "Context API", "Chart.js", "NodeJs"],
  },
  {
    title: "Placement Tracker",
    tech: ["ReactJs", "JWT Auth", "MongoDB", "Tailwind CSS", "Node JS"],
  },
];

const MyProjects = () => {
  const slidesToShow = 3;
  const [centerSlide, setCenterSlide] = useState(Math.floor(slidesToShow / 2));

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow,
    speed: 500,
    beforeChange: (current, next) => {
      const center = (next + Math.floor(slidesToShow / 2)) % data.length;
      setCenterSlide(center);
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="projects"
      className="relative z-20 w-full m-3 py-10 px-5 md:w-3/4 mx-auto font-poppins flex flex-col gap-8 min-h-screen justify-center "
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-6"
      >
        My Projects
      </motion.h2>

      <Slider {...settings}>
        {data.map((d, index) => {
          const isCenter = index === centerSlide;

          return (
            <div
              key={d.title}
              className={`transition-transform duration-300 px-6 ${
                isCenter ? "scale-110 z-10" : "scale-90 opacity-70"
              }`}
            >
              <div className="bg-gray-700 backdrop-blur-md bg-opacity-70 p-6 rounded-lg shadow-lg text-white h-[400px] overflow-hidden transition-all relative">
                <div className="mb-4 rounded-xl overflow-hidden">
                  <h2 className="text-lg font-medium text-center mb-3 ">
                    {d.title}
                  </h2>
                  <img
                    src="https://via.placeholder.com/300x150"
                    alt={d.title}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  {d.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-white text-black text-xs px-2 py-1 rounded shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href="https://github.com/yash-bhargava20"
                  target="_blank"
                  className="text-3xl absolute bottom-2 left-2 m-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default MyProjects;

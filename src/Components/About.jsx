import React from "react";
import image from "../assets/Yash.jpg";
import Qualification from "./Qualification";
import Experience from "./Experience";

const About = () => {
  return (
    <section className="py-20 px-10 m-3 flex flex-col w-full gap-8 h-screen">
      <h2 className="z-10 text-4xl text-center font-bold mb-8">About Me</h2>
      <div className="z-10 grid grid-cols-[1fr,2fr] gap-10 mx-10 place-items-center">
        <div className="h-[300px] w-[300px] rounded-xl overflow-hidden">
          <img
            src={image}
            className="w-full h-full object-cover"
            alt="Profile"
          ></img>
        </div>

        <div className="text-lg px-3 py-2 leading-relaxed">
          <p>
            I am a passionate and dedicated Computer Science student eager to
            kickstart my career in software development. With a strong
            foundation in programming, data structures, and web development, I
            strive to create efficient and user-friendly solutions. I have
            hands-on experience with JavaScript, React.js, Node.js, HTML/CSS and
            I am constantly learning new technologies to stay updated. As a
            quick learner with a problem-solving mindset, I am enthusiastic
            about contributing to innovative projects and growing in the tech
            industry.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 items-start w-full max-w-md ">
        <Qualification />
      </div>
      <div className="flex flex-col gap-5 items-start w-full max-w-md">
        <Experience />
      </div>
    </section>
  );
};

export default About;

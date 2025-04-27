import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import MyProjects from "./Components/MyProjects";

const App = () => {
  return (
    <>
      <div className="relative bg-slate-900 text-white min-h-screen w-full overflow-x-hidden">
        <Header />
        <div className="fixed inset-0 ">
          <div
            className="absolute mt-8 top-28 inset-x-0 sm:inset-x-8 md:inset-x-10 w-full h-[500px]
             xl:w-[1200px] xl:h-[500px] lg:w-[1000px] lg:h-[450px] md:w-[800px] md:h-[500px] sm:w-[700px] sm:h-[400px]
           mx-auto rotate-180 rounded-full bg-gradient-to-r from-purple-950 to to-blue-900 blur-3xl opacity-80 "
          ></div>
        </div>
        <div>
          <Home />
          <About />
          <MyProjects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;

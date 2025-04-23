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
      <div className="relative bg-slate-900 text-white h-full w-full overflow-x-hidden">
        <div className="fixed inset-0 h-full ">
          <div className="absolute mt-8 inset-y-28 inset-x-10 w-[1400px] h-[500px] mx-auto rotate-180 rounded-full bg-gradient-to-r from-purple-950 to to-blue-900 blur-3xl opacity-80 xl:w-[1200px] xl:h-[500px]  lg:w-[1000px] lg:h-[450px] sm:w-[700px] sm:h-[400px] "></div>
        </div>
        <Header />
        <Home />
        <About />
        <MyProjects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;

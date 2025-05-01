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
        <div className="fixed inset-0 ">
          <div
            className="absolute top-40 left-0 right-0 sm:left-8 sm:right-8 md:left-10 md:right-10
            mx-auto w-full max-w-[1400px] h-[500px] rotate-180 rounded-full bg-gradient-to-r 
            from-purple-950 to-blue-900 blur-3xl opacity-80 "
          ></div>
        </div>
        <div className="fixed top-0 left-0 right-0 z-50 w-full">
          <Header />
        </div>

        <main className="relative z-10">
          <Home />
          <About />
          <MyProjects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
};

export default App;

import React from "react";
import Social from "./Social";
import Data from "./Data";
import image from "../assets/Yash.jpg";

const Home = () => {
  return (
    <>
      <section className="flex justify-center h-screen m-0 p-0">
        <div className=" z-10 w-full h-[80%] max-w-7xl px-10 py-10 grid grid-cols-[.7fr,2fr,1fr] gap-8 place-items-center">
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
        </div>
      </section>
    </>
  );
};

export default Home;

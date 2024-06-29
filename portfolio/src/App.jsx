import React, { useState, useCallback } from "react";
import { debounce } from "lodash";
import "./index.css";
import SkillsList from "./components/SkillsList";

const App = () => {
  const [bgImage, setBgImage] = useState("about-bg1");

  const scrollSectionHandler = useCallback(
    debounce((event) => {
      if (event.deltaY > 0) {
        setBgImage("about-bg2");
      } else {
        setBgImage("about-bg1");
      }
    }, 150),
    []
  );

  return (
    <div
      className={`${bgImage} transition-all duration-500 w-screen h-screen flex flex-col items-center overflow-hidden`}
      onWheel={scrollSectionHandler}
    >
      <h1 className="text-6xl z-50 relative font-bold before:content-underline before:absolute before:left-0 before:top-4 before:-z-10">
        About
      </h1>
      <div>
        <p className="max-w-96">
          I am a{" "}
          <span className="text-majorelle-blue uppercase font-bold">
            full stack developer
          </span>{" "}
          with extensive knowledge of the MERN Stack. With over a year and a
          half of professional experience, I have honed my skills in building
          and debugging complex web applications. My projects, showcased below,
          speak volumes about my capabilities and dedication to delivering
          high-quality solutions. I am always eager to take on new challenges
          and collaborate with others.
        </p>
      </div>
      <SkillsList />
    </div>

    // <div className="relative w-screen h-screen  bg-blue-500 overflow-hidden">
    //   <Lottie animationData={animationData} />
    //   {/* <ul className="absolute inset-0 flex items-center justify-center">
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Projects</li>
    //     <li>Contact</li>
    //   </ul> */}
    //   <div className="absolute inset-36">
    //     <div className="bg-cover hero-bg flex flex-col col gap-6 justify-center items-center h-full rounded-3xl">
    //       <h1 className="text-white text-5xl md:text-7xl">Hello I'm Filip</h1>
    //       <h1>I'm a Full Stack Web Developer</h1>
    //       <button className="border-majorelle-blue border-2 px-10 py-3 rounded-full text-majorelle-blue font-medium text-lg">
    //         View My Work
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;

import React, { useCallback, useState } from "react";
import Illustration from "/assets/illustration.png";
import SkillsList from "../components/SkillsList";
import { debounce } from "lodash";

function AboutSection() {
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
      className={`${bgImage} transition-all duration-500 w-screen h-screen flex flex-col items-center gap-10`}
      onWheel={scrollSectionHandler}
    >
      <h1 className="text-6xl z-50 relative pt-10 font-bold before:content-underline before:absolute before:left-0 before:top-14 before:-z-10">
        About
      </h1>
      <div className="flex w-screen justify-around items-center">
        <p className="max-w-xl text-2xl">
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
        <div>
          <img src={Illustration} />
        </div>
      </div>
      <SkillsList />
    </div>
  );
}

export default AboutSection;

import React, { useCallback, useState } from "react";
import Illustration from "/assets/illustration.png";
import SkillsList from "../components/SkillsList";
import { debounce } from "lodash";
import Heading from "../components/Heading";
import js from "/assets/illustrations/js-illustration.svg";
import cpp from "/assets/illustrations/cpp-illustration.svg";
import php from "/assets/illustrations/php-illustration.svg";
import html from "/assets/illustrations/html-illustration.svg";
import css from "/assets/illustrations/css-illustration.svg";

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
      <Heading title={"About"} />
      <div className="flex w-screen justify-around items-center">
        <p className="max-w-2xl text-2xl">
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
        <div className="relative px-3">
          <img src={Illustration} className="max-w-[380px]" />
          <div className="flex items-center justify-center">
            <img
              src={js}
              className="absolute top-2 left-0 transition-all animate-bounce duration-1000"
            />
            <img
              src={cpp}
              className="absolute -top-12 left-20 transition-all animate-bounce"
            />
            <img
              src={php}
              className="absolute -top-16 right-44 transition-all animate-bounce"
            />
            <img
              src={html}
              className="absolute -top-1 right-20 transition-all animate-bounce"
            />
            <img
              src={css}
              className="absolute top-24 right-0 transition-all animate-bounce"
            />
          </div>
        </div>
      </div>
      <SkillsList />
    </div>
  );
}

export default AboutSection;

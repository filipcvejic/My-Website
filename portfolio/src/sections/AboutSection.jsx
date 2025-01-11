import React, { useCallback, useState } from "react";
import Illustration from "../assets/illustration.png";
import SkillsList from "../components/SkillsList";
import { debounce } from "lodash";
import Heading from "../components/Heading";
import js from "../assets/illustrations/js-illustration.svg";
import cpp from "../assets/illustrations/cpp-illustration.svg";
import php from "../assets/illustrations/php-illustration.svg";
import html from "../assets/illustrations/html-illustration.svg";
import css from "../assets/illustrations/css-illustration.svg";

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
      className={`section ${bgImage} transition-all duration-500 w-full flex flex-col items-center min-h-screen gap-8`}
      onWheel={scrollSectionHandler}
      id="about"
    >
      <Heading title={"About"} />
      <div className="flex flex-col gap-5 h-full">
        <div className="flex lg:flex-row default:flex-col-reverse w-screen justify-around items-center lg:px-5">
          <p className="xl:max-w-3xl lg:max-w-lg md:text-2xl lg:text-start lg:px-0 default:w-full default:text-center default:text-xl default:px-6">
            I am a{" "}
            <span className="text-majorelle-blue uppercase font-bold">
              full stack developer
            </span>{" "}
            with extensive knowledge of the MERN Stack. With over a three years of professional experience, I have honed my skills in building
            and debugging complex web applications. My projects, showcased
            below, speak volumes about my capabilities and dedication to
            delivering high-quality solutions. I am always eager to take on new
            challenges and collaborate with others.
          </p>
          <div className="relative px-7">
            <img
              src={Illustration}
              className="default:max-w-[285px] sm:max-w-full"
            />
            <div className="default:hidden lg:flex items-center justify-center">
              <img
                src={js}
                className="absolute top-2 left-0 transition-all animate-bounce duration-1000"
              />
              <img
                src={cpp}
                className="absolute -top-12 left-24 transition-all animate-bounce"
              />
              <img
                src={php}
                className="absolute -top-16 left-50 transition-all animate-bounce"
              />
              <img
                src={html}
                className="absolute -top-1 right-24 transition-all animate-bounce"
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
    </div>
  );
}

export default AboutSection;

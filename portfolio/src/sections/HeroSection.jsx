import React from "react";

import ButtonStarsIcon from "../assets/icons/ButtonStarsIcon";
import CanvasDots from "../components/ConnectingDotsCanvas";

function HeroSection() {
  return (
    <div className="h-screen hero-bg relative flex justify-center items-center overflow-hidden">
      <CanvasDots />
      <div className="flex flex-col items-center gap-7 z-10">
        <div className="md:text-8xl sm:text-6xl default:text-5xl tracking-tight flex flex-col items-center leading-none font-semibold text-center default:mx-10 lg:mx-0">
          <span className="text-majorelle-blue tracking-tight">
            Hello, I'm Filip.
          </span>
          <p className="tracking-tight">I'm a Full Stack Web</p>
          <p>Developer.</p>
        </div>
        <a
          href="#about"
          className="project-button group relative overflow-hidden border-majorelle-blue hover:border-none flex items-center md:gap-2 default:gap-[6px] border-[1px] md:px-8 default:px-4 default:py-3 rounded-full text-majorelle-blue font-medium md:text-lg default:text-lg hover:my-[1px]"
        >
          <ButtonStarsIcon className="mt-5 z-40" />
          <p className="z-40 text-majorelle-blue group-hover:text-white transition-all duration-300">
            View My Work
          </p>
        </a>
      </div>
    </div>
  );
}

export default HeroSection;

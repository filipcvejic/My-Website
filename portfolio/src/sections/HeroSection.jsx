import React, { useEffect } from "react";
import { initCanvasDots } from "../../connecting-dots-animation";
import leftSpiral from "/assets/spiral-left.png";
import rightSpiral from "/assets/spiral-right.png";

function HeroSection() {
  useEffect(() => {
    initCanvasDots();
  }, []);

  return (
    <div
      className="section h-screen relative flex justify-center items-center"
      id="home"
    >
      <canvas
        className="connecting-dots absolute inset-0 w-full h-full z-40"
        id="canvas"
      ></canvas>
      <h1 className="text-8xl tracking-tight flex flex-col items-center font-semibold font-poppins text-center z-10">
        <span className="text-majorelle-blue tracking-tight">
          Hello, I'm Filip.
        </span>
        <p className="tracking-tight">I'm a Full Stack Web</p>
        <p>Developer.</p>
      </h1>
      <div>
        <img src={leftSpiral} className="absolute w-[550px] left-0 bottom-0 " />
        <img
          src={rightSpiral}
          className="absolute w-[550px] right-0 bottom-0"
        />
      </div>
    </div>
  );
}

export default HeroSection;

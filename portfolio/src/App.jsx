import React from "react";
import animationData from "./balloons-animation.json";
import Lottie from "lottie-react";

const App = () => {
  return (

    <div className="relative w-screen h-screen overflow-hidden">
      <Lottie animationData={animationData}/>
      <ul className="absolute inset-0 flex items-center justify-center">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default App;

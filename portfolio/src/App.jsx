import React from "react";
import animationData from "./balloons-animation.json";
import Lottie from "lottie-react";

const App = () => {
  return (
    <div className="relative h-screen">
      <Lottie animationData={animationData} />
      <ul className="absolute left-50% right-50%  flex justify-center space-x-4">
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default App;

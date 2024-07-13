import React from "react";
import html from "/assets/icons/html.svg";
import mongo from "/assets/icons/mongo.svg";
import git from "/assets/icons/git.svg";
import tailwind from "/assets/icons/tailwind.svg";
import js from "/assets/icons/js.svg";
import bootstrap from "/assets/icons/bootstrap.svg";
import express from "/assets/icons/express.svg";
import ts from "/assets/icons/ts.svg";
import next from "/assets/icons/next.svg";
import css from "/assets/icons/css.svg";
import node from "/assets/icons/node.svg";
import react from "/assets/icons/react.svg";
import Lottie from "lottie-react";
import animationData from "../animations/skills-bubbles-animation.json";

function SkillsList() {
  const skills = [
    html,
    mongo,
    git,
    tailwind,
    js,
    express,
    ts,
    next,
    css,
    node,
    react,
  ];

  return (
    <div className="relative w-full">
      {/* <Lottie animationData={animationData} /> */}
      <div className="flex justify-center w-full">
        <div className="lg:w-full lg:block hidden md:hidden sm:hidden">
          <div className="flex flex-col justify-center items-center w-full group px-36 gap-12">
            <div className="flex flex-row w-full justify-between">
              {skills.slice(0, 6).map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
                />
              ))}
            </div>
            <div className="flex flex-row justify-around w-full px-10">
              {skills.slice(6, 11).map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Drugi kontejner za manje ekrane */}
        <div className="w-full lg:hidden xl:hidden 2xl:hidden">
          <div className="flex flex-col justify-center items-center w-full group md:px-32 sm:px-20 px-5 gap-12">
            <div className="flex flex-row w-full justify-between">
              {skills.slice(0, 4).map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  className="transition-transform lg:w-24 md:w-20 sm:w-16 w-14 duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
                />
              ))}
            </div>
            <div className="flex flex-row justify-around w-full sm:px-10 px-6">
              {skills.slice(4, 7).map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  className="transition-transform lg:w-24 md:w-20 sm:w-16 w-14 duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
                />
              ))}
            </div>
            <div className="flex flex-row w-full justify-between">
              {skills.slice(7, 11).map((skill, index) => (
                <img
                  key={index}
                  src={skill}
                  className="transition-transform lg:w-24 md:w-20 sm:w-16 w-14 duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
                />
              ))}
            </div>
          </div>
        </div>

        {/* <div className="sm:w-full sm:block hidden lg:hidden md:hidden">
        <div className="flex flex-col justify-center items-center w-full group px-24 gap-12">
          <div className="flex flex-row justify-around w-full px-10">
            {skills.slice(0, 2).map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
              />
            ))}
          </div>
          <div className="flex flex-row justify-between w-full">
            {skills.slice(2, 5).map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
              />
            ))}
          </div>
          <div className="flex flex-row w-full justify-around">
            {skills.slice(5, 8).map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
              />
            ))}
          </div>
          <div className="flex flex-row w-full justify-between">
            {skills.slice(8, 11).map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
              />
            ))}
          </div>
        </div>
      </div> */}
      </div>
    </div>
  );
}

export default SkillsList;

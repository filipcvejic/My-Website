import React from "react";
import html from "/icons/html.svg";
import mongo from "/icons/mongo.svg";
import git from "/icons/git.svg";
import tailwind from "/icons/tailwind.svg";
import bootstrap from "/icons/bootstrap.svg";
import express from "/icons/express.svg";
import ts from "/icons/ts.svg";
import js from "/icons/js.svg";
import css from "/icons/css.svg";
import node from "/icons/node.svg";
import react from "/icons/react.svg";

function SkillsList() {
  const skills = [
    html,
    mongo,
    git,
    tailwind,
    bootstrap,
    express,
    ts,
    js,
    css,
    node,
    react,
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="hidden lg:block w-full">
        <div className="flex flex-col justify-center items-center w-full group px-36 gap-24">
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
      <div className="hidden md:block w-full">
        <div className="flex flex-col justify-center items-center w-full group px-36 gap-12">
          <div className="flex flex-row w-full justify-between">
            {skills.slice(0, 4).map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
              />
            ))}
          </div>
          <div className="flex flex-row justify-around w-full px-10">
            {skills.slice(4, 7).map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
              />
            ))}
          </div>
          <div className="flex flex-row w-full justify-between">
            {skills.slice(7, 11).map((skill, index) => (
              <img
                key={index}
                src={skill}
                className="transition-transform duration-300 transform group-hover:scale-125 group-hover:translate-x-4 group-hover:translate-y-4"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="hidden sm:block w-full">
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
      </div>
    </div>
  );
}

export default SkillsList;

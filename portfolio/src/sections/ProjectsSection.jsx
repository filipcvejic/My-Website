import React from "react";
import ButtonStarsIcon from "../icons/ButtonStarsIcon";
import Image from "/assets/Untitled.png";
import Heading from "../components/Heading";

function ProjectsSection() {
  const projects = [
    {
      title: "Technomedia",
      link: "https://technomediashop.netlify.app",
      description:
        "with extensive knowledge of the MERN stack. With over a year and a half of experience working on diverse projects, I have honed my skills in both Front-End and Back-End Development.",
      image: Image,
    },
    {
      title: "Technomedia",
      link: "https://technomediashop.netlify.app",
      description:
        "with extensive knowledge of the MERN stack. With over a year and a half of experience working on diverse projects, I have honed my skills in both Front-End and Back-End Development.",
      image: Image,
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <Heading title={`Projects`} />
      <div className="w-full">
        {projects?.map((project, index) => {
          const evenIndex = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex ${
                evenIndex ? "flex-row-reverse" : ""
              } gap-7 items-center`}
            >
              <div
                className={`project-bg${
                  evenIndex ? "1" : "2"
                } flex items-center justify-center w-1/2 py-40`}
              >
                <img src={project.image} className="w-[60%] mr-10" />
              </div>
              <div
                className={`w-1/2 ${
                  evenIndex ? "pl-36" : "pr-36"
                } flex flex-col ${evenIndex ? "items-end" : "items-start"}`}
              >
                <span className="text-7xl">{project.title}</span>
                <p className="text-end text-2xl">{project.description}</p>
                <div className="fancy">
                  <button className="overview-project-button flex items-center gap-2 border-majorelle-blue border-2 px-8 py-3 rounded-full text-majorelle-blue font-medium text-lg hover:bg-majorelle-blue hover:text-white">
                    <ButtonStarsIcon className="mt-5" />
                    View My Work
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;

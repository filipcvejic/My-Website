import React from "react";
import ButtonStarsIcon from "../icons/ButtonStarsIcon";
import Image from "/assets/Untitled3.png";
import Heading from "../components/Heading";

function ProjectsSection() {
  const projects = [
    {
      title: "Technomedia",
      link: "https://technomediashop.netlify.app",
      description:
        "Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3.",
      image: Image,
    },
    {
      title: "Technomedia",
      link: "https://technomediashop.netlify.app",
      description:
        "Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3.",
      image: Image,
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 h-screen">
      <Heading title={`Projects`} />
      <div className="w-full flex flex-col justify-around h-full">
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
                } flex items-center justify-center w-1/2 2xl:py-40 default:py-16`}
              >
                <img
                  src={project.image}
                  className={`
                    2xl:w-[60%] xl:w-[80%] default:w-full ${
                      evenIndex ? "mr-10" : "ml-10"
                    } rounded-xl`}
                />
                {/*  2xl:w-[60%]  */}
              </div>
              <div
                className={`w-1/2 ${
                  evenIndex ? "xl:pl-36 sm:pl-9 default:pl-6" : "xl:pr-36"
                } flex flex-col ${
                  evenIndex ? "items-end" : "items-start"
                } gap-1`}
              >
                <span className="xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl default:text-xl font-bold">
                  {project.title}
                </span>
                <p
                  className={`${
                    evenIndex ? "text-end" : "text-start"
                  } md:text-2xl sm:text-lg default:text-sm`}
                >
                  {project.description}
                </p>
                {/* <button className="default:px-2 default:py-[6px] border-majorelle-blue border-[1px]  text-majorelle-blue rounded-lg text-sm">
                  View My Work
                </button>
                <button className="default:px-2 default:py-[6px] border-majorelle-blue border-[1px]  text-majorelle-blue  rounded-lg text-sm">
                  Learn More
                </button> */}
                <div className="fancy">
                  <button className="overview-project-button flex items-center md:gap-2 default:gap-[6px] border-majorelle-blue border-[1px] md:px-8 default:px-2 md:py-3 default:py-2 rounded-full text-majorelle-blue font-medium md:text-lg default:text-xs hover:bg-majorelle-blue hover:text-white hover:transition-all hover:duration-1000">
                    <ButtonStarsIcon className="mt-5 z-40" />
                    <p className="z-40 text-majorelle-blue">View My Work</p>
                  </button>
                </div>
                <div className="fancy">
                  <button className="overview-project-button flex items-center md:gap-2 default:gap-[6px] border-majorelle-blue border-[1px] md:px-8 default:px-2 md:py-3 default:py-2 rounded-full text-majorelle-blue font-medium md:text-lg default:text-xs hover:bg-majorelle-blue hover:text-white hover:transition-all hover:duration-1000">
                    <ButtonStarsIcon className="mt-5 z-40" />
                    <p className="z-40 text-majorelle-blue">Learn more</p>
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

import React from "react";
import ButtonStarsIcon from "../icons/ButtonStarsIcon";

function ProjectsSection() {
  const projects = [
    {
      title: "Technomedia",
      link: "https://technomediashop.netlify.app",
      description:
        "with extensive knowledge of the MERN stack. With over a year and a half of experience working on diverse projects, I have honed my skills in both Front-End and Back-End Development.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl z-50 relative pt-10 font-bold before:content-underline before:absolute before:left-0 before:top-14 before:-z-10">
        Projects
      </h1>
      <div className="w-full">
        {projects?.map((project, index) => (
          <div key={index} className="flex flex-row-reverse gap-7 items-center">
            <div
              className={`project-bg flex items-center justify-center w-1/2 py-40`}
            >
              <img src={project.image} className="w-96 mr-10" />
            </div>
            <div className="w-1/2 pl-36 flex flex-col items-end">
              <span className="text-7xl">{project.title}</span>
              <p className="text-end text-2xl">{project.description}</p>
              <button className="overview-project-button flex items-center gap-2 border-majorelle-blue border-2 px-8 py-3 rounded-full text-majorelle-blue font-medium text-lg hover:bg-majorelle-blue hover:text-white">
                <ButtonStarsIcon className="mt-5" />
                View My Work
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;

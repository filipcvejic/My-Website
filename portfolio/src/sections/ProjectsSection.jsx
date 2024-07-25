import ButtonStarsIcon from "../assets/icons/ButtonStarsIcon";
import Image from "../assets/Untitled.png";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function ProjectsSection() {
  const projects = [
    {
      title: "Technomedia",
      link: "https://technomediashop.netlify.app",
      description:
        "Full stack social media application built with React, Node.js, Express.js, MongoDB, Socket.io and AWS S3.",
      image: Image,
      repository: "https://github.com/filipcvejic/Technomedia",
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
    <div className="section flex flex-col items-center gap-10" id="projects">
      <Heading title={`Projects`} />
      <div className="w-full flex flex-col h-full default:gap-20 justify-between">
        {projects?.map((project, index) => {
          const evenIndex = index % 2 === 0;

          return (
            <div
              key={index}
              className={`flex ${
                evenIndex ? "flex-row-reverse " : ""
              }gap-7 items-center`}
            >
              <div
                className={`project-bg${
                  evenIndex ? "1" : "2"
                } flex items-center justify-center w-1/2 2xl:py-32 default:py-16`}
              >
                <img
                  src={project.image}
                  className={`
                    2xl: xl:w-[90%] default:w-full ${
                      evenIndex ? "mr-0" : "ml-0"
                    } rounded-xl`}
                />
              </div>
              <div
                className={`w-1/2 ${
                  evenIndex ? "xl:pl-36 sm:pl-9 default:pl-6" : "xl:pr-36"
                } flex flex-col ${
                  evenIndex ? "items-end" : "items-start"
                } gap-1`}
              >
                <span className="bg-clip-text text-gradient bg-gradient-text xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl default:text-xl font-bold">
                  {project.title}
                </span>
                <p
                  className={`${
                    evenIndex ? "text-end" : "text-start"
                  } md:text-2xl sm:text-lg default:text-sm`}
                >
                  {project.description}
                </p>

                <Link
                  to={project.link}
                  target="_blank"
                  className="project-button group relative overflow-hidden border-majorelle-blue hover:border-none flex items-center md:gap-2 default:gap-[6px] border-[1px] md:px-8 default:px-2 md:py-3 default:py-2 rounded-full text-majorelle-blue font-medium md:text-lg default:text-xs hover:my-[1px]"
                >
                  <ButtonStarsIcon className="mt-5 z-40" />
                  <p className="z-40 text-majorelle-blue group-hover:text-white transition-all duration-300">
                    View My Work
                  </p>
                </Link>
                <Link
                  to={project.repository}
                  target="_blank"
                  className="project-button group relative overflow-hidden border-majorelle-blue hover:border-none flex items-center md:gap-2 default:gap-[6px] border-[1px] md:px-8 default:px-2 md:py-3 default:py-2 rounded-full text-majorelle-blue font-medium md:text-lg default:text-xs hover:my-[1px]"
                >
                  <ButtonStarsIcon className="mt-5 z-40" />
                  <p className="z-40 text-majorelle-blue group-hover:text-white transition-all duration-300">
                    Learn More
                  </p>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsSection;

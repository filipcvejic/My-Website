import ButtonStarsIcon from "../assets/icons/ButtonStarsIcon";
import TechnomediaImage from "../assets/Technomedia.png";
import TermodomImage from "../assets/Termodom.png";
import PlumberImage from "../assets/Plumber.png";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function ProjectsSection() {
  const projects = [
    {
      title: "Technomedia",
      link: "https://technomedia-five.vercel.app",
      description:
        "Full stack e-commerce application built with React, Node.js, Express.js, MongoDB and Tailwind.",
      image: TechnomediaImage,
      repository: "https://github.com/filipcvejic/Technomedia",
    },
    {
      title: "Termodom",
      link: "https://termodom.rs",
      description:
        "E-Commerce Application for Construction Materials made in React, Next.js, TypeScript, Node.js, PostgreSQL and MUI.",
      image: TermodomImage,
      repository:
        "https://github.com/LimitlessSoft/termodom--ecosystem/tree/master/src/TD.Web/TD.Web.Public/TD.Web.Public.Fe",
    },
    {
      title: "Plumber",
      link: "https://vodoinstalater-mica.rs",
      description:
        "Plumbing Website built with Next.js, React and TypeScript, offering plumbing services with a user-friendly interface.",
      image: PlumberImage,
      repository: "https://github.com/filipcvejic/Odgusivac",
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

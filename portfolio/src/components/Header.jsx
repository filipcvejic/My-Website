import React from "react";
import { Link } from "react-router-dom";

function Header() {
  const navigationLinks = [
    {
      route: "home",
      label: "Home",
    },
    {
      route: "about",
      label: "About",
    },
    {
      route: "projects",
      label: "Projects",
    },
    {
      route: "contact",
      label: "Contact",
    },
  ];

  return (
    <div className="bg-header fixed w-full flex default:px-4 md:px-20 py-2 items-center z-50">
      <ul className="list-none flex sm:gap-20 default:justify-around default:text-xl sm:text-2xl font-semibold w-full lg:justify-end">
        {navigationLinks.map((link) => (
          <li className="text-black relative hover:text-majorelle-blue after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[3px] after:opacity-0 after:transition-all after:duration-300 after:bg-majorelle-blue hover:after:w-full hover:after:opacity-100">
            <Link to={link.route}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;

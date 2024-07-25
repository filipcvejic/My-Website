import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Header() {
  const navigationLinks = [
    { route: "home", label: "Home" },
    { route: "about", label: "About" },
    { route: "projects", label: "Projects" },
    { route: "contact", label: "Contact" },
  ];

  const location = useLocation();

  useEffect(() => {
    const navLinkEls = document.querySelectorAll(".nav-link");
    const sectionEls = document.querySelectorAll(".section");

    const updateActiveLink = () => {
      let currentSection = "home";

      sectionEls.forEach((sectionEl) => {
        if (window.scrollY >= sectionEl.offsetTop - 200) {
          currentSection = sectionEl.id;
        }
      });

      const activeClassNames =
        "text-majorelle-blue after:w-full after:opacity-100";

      navLinkEls.forEach((navLinkEl) => {
        navLinkEl.classList.remove(...activeClassNames.split(" "));

        if (navLinkEl.href.includes(currentSection)) {
          navLinkEl.classList.add(...activeClassNames.split(" "));
        }
      });
    };

    const scrollToSection = () => {
      if (location.hash) {
        const targetSection = document.querySelector(location.hash);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    scrollToSection();
    updateActiveLink();

    window.addEventListener("scroll", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
    };
  }, [location.hash]);

  return (
    <div className="bg-header fixed w-full flex default:px-2 md:px-20 py-[10px] items-center z-50 shadow-3xl backdrop-blur-md">
      <ul className="list-none flex sm:gap-20 default:justify-around font-semibold w-full lg:justify-end">
        {navigationLinks.map((link, index) => (
          <li key={index} className={`text-black`}>
            <a
              href={`#${link.route}`}
              className="nav-link default:text-lg sm:text-2xl relative after:content-[''] after:absolute after:left-0 after:bottom-[-5px] after:w-0 after:h-[3px] after:opacity-0 after:transition-all after:duration-300 after:bg-majorelle-blue after:rounded-full 
            hover:text-majorelle-blue hover:after:w-full hover:after:opacity-100"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Header;

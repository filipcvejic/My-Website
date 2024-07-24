import React from "react";
import MailIcon from "../assets/icons/MailIcon";
import LinkedInIcon from "../assets/icons/LinkedInIcon";
import GitHubIcon from "../assets/icons/GitHubIcon";
import TwitterIcon from "../assets/icons/TwitterIcon";
import ContactTitle from "./ContactTitle";

function Footer() {
  return (
    <div className="footer-bg w-full flex md:flex-col gap-6 md:justify-center default:justify-between md:items-center items-end py-2 px-3 md:py-16 md:px-0 md:h-[20vh]">
      <div className="md:hidden">
        <ContactTitle color={"white"} />
      </div>
      <div className="flex md:gap-5 default:flex-col xsm:flex-row default:gap-2">
        <MailIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <TwitterIcon />
      </div>
      <p className="text-3xl text-white hover:text-greenyelow hover:scale-110 transition-all duration-500 default:hidden md:block">
        <a href="mailto:contact@filipcvejic.com">contact@filipcvejic.com</a>
      </p>
    </div>
  );
}

export default Footer;

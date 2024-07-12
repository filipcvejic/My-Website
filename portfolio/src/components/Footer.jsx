import React from "react";
import MailIcon from "../icons/MailIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import GitHubIcon from "../icons/GitHubIcon";
import TwitterIcon from "../icons/TwitterIcon";

function Footer() {
  return (
    <div className="footer-bg w-full flex flex-col gap-6 justify-center items-center py-16 h-[24vh]">
      <div className="flex flex-row gap-5">
        <MailIcon />
        <LinkedInIcon />
        <GitHubIcon />
        <TwitterIcon />
      </div>
      <p className="text-2xl text-white">
        <a href="mailto:filipinfo@gmail.com">filipinfo@gmail.com</a>
      </p>
    </div>
  );
}

export default Footer;

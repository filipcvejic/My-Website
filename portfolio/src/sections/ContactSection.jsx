import React from "react";

function ContactSection() {
  return (
    <div className="flex flex-col gap-8 font-poppins">
      <div className="text-majorelle-blue font-bold flex flex-col gap-0 leading-none">
        <p className="text-5xl mb-[-12px]">Let’s</p>
        <p className="text-8xl mb-[-12px]">Start</p>
        <p className="text-6xl">a project!</p>
      </div>
      <div>
        <p className="text-lg font-light">
          If you preffer to contact me use this email.
        </p>
        <p className="text-majorelle-blue font-bold text-xl">
          <a href="mailto:filipinfo@gmail.com">filipinfo@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default ContactSection;

import React from "react";

function ContactTitle({ color }) {
  return (
    <div className="flex flex-col md:gap-8">
      <div
        className={`text-${color} font-bold flex flex-col gap-0 leading-none`}
      >
        <p className="md-lg:text-6xl md:text-5xl default:text-3xl mb-[-12px]">
          Let’s
        </p>
        <p className="md-lg:text-9xl md:text-8xl default:text-6xl mb-[-12px]">
          Start
        </p>
        <p className="mg-lg:text-7xl md:text-6xl default:text-4xl">
          a project!
        </p>
      </div>
      <div>
        <p className="md-lg:text-2xl md:text-xl default:text-lg font-light md:text-black text-white">
          If you preffer to contact me use this email.
        </p>
        <p
          className={`text-${color} font-bold md-lg:text-3xl md:text-2xl default:text-lg hover:text-cornflower-blue transition-all duration-300`}
        >
          <a href="mailto:filipinfo@gmail.com">filipinfo@gmail.com</a>
        </p>
      </div>
    </div>
  );
}

export default ContactTitle;

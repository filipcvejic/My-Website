import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";

function ContactSection() {
  const contactLabels = ["Full Name", "Company", "Email", "Your Inquiry"];

  return (
    <div className="h-screen flex flex-col contact-bg">
      <div className="flex flex-col items-center justify-between h-full">
        <Heading title={`Contact`} />
        <div className="flex justify-around w-full items-center h-full">
          <div className="flex flex-col gap-8 font-poppins">
            <div className="text-majorelle-blue font-bold flex flex-col gap-0 leading-none">
              <p className="text-6xl mb-[-12px]">Let’s</p>
              <p className="text-9xl mb-[-12px]">Start</p>
              <p className="text-7xl">a project!</p>
            </div>
            <div>
              <p className="text-2xl font-light">
                If you preffer to contact me use this email.
              </p>
              <p className="text-majorelle-blue font-bold text-3xl">
                <a href="mailto:filipinfo@gmail.com">filipinfo@gmail.com</a>
              </p>
            </div>
          </div>
          <form className="bg-electric-violet-20 rounded-xl p-8 flex flex-col gap-4 max-w-[500px] w-full">
            {contactLabels.map((label, index) => {
              const isLastElement = index === contactLabels.length - 1;

              return (
                <div className="flex flex-col gap-2">
                  <label className="text-lg from-neutral-950">{label}</label>
                  {isLastElement ? (
                    <textarea className="rounded-lg min-h-20 h-full`" />
                  ) : (
                    <input className="h-10 rounded-lg pl-3 outline-none" />
                  )}
                </div>
              );
            })}
            <button className="bg-electric-violet text-white py-2 rounded-lg text-lg font-semibold mt-2 hover:bg-electric-violet-20">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactSection;

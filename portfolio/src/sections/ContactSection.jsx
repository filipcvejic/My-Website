import React from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import ContactTitle from "../components/ContactTitle";

function ContactSection() {
  const contactLabels = ["Full Name", "Company", "Email", "Your Inquiry"];

  return (
    <div className="h-screen flex flex-col contact-bg default:gap-3">
      <div className="flex flex-col items-center justify-between h-full default:gap-4">
        <Heading title={`Contact`} />
        <div className="flex justify-around w-full items-center h-full default:px-5">
          <div className="md:block default:hidden">
            <ContactTitle color={"majorelle-blue"} />
          </div>
          <form className="bg-electric-violet-20 rounded-xl p-8 flex flex-col gap-4 xl:max-w-[500px] md:max-w-[400px] w-full">
            {contactLabels.map((label, index) => {
              const isLastElement = index === contactLabels.length - 1;

              return (
                <div className="flex flex-col gap-2" key={index}>
                  <label className="text-lg from-neutral-950">{label}</label>
                  {isLastElement ? (
                    <textarea className="rounded-lg min-h-20 h-full outline-none pl-3 pt-2" />
                  ) : (
                    <input className="h-10 rounded-lg pl-3 outline-none" />
                  )}
                </div>
              );
            })}
            <button className="bg-electric-violet text-white py-2 rounded-lg text-lg font-semibold mt-2 hover:bg-cornflower-blue">
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

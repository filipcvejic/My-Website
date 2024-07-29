import React, { useEffect } from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import ContactTitle from "../components/ContactTitle";
import { startAnimation } from "../../form-animation";

function ContactSection() {
  const contactLabels = ["Full Name", "Company", "Email", "Your Inquiry"];

  useEffect(() => {
    startAnimation("contact-form");
  }, []);

  return (
    <div
      className="section  flex flex-col contact-bg default:gap-14"
      id="contact"
    >
      <div className="flex flex-col items-center justify-between h-full default:gap-16">
        <Heading title={`Contact`} />
        <div className="flex justify-around w-full items-center h-full default:px-5">
          <div className="md:block default:hidden">
            <ContactTitle color={"majorelle-blue"} />
          </div>
          <div className="contact-form-wrapper relative overflow-hidden bg-transparent xl:max-w-[500px] md:max-w-[400px] w-full rounded-xl">
            <div className="contact-form-background-animation" />
            <form className="contact-form relative border-[6px] overflow-hidden border-majorelle-blue border-transparent bg-electric-violet-20 rounded-xl p-8 flex flex-col gap-4">
              {contactLabels.map((label, index) => {
                const isLastElement = index === contactLabels.length - 1;

                return (
                  <div className="flex flex-col gap-2" key={index}>
                    <label className="text-lg from-neutral-950 z-20">
                      {label}
                    </label>
                    {isLastElement ? (
                      <textarea className="rounded-lg default:h-14 xsm:min-h-20 h-full outline-none pl-3 pt-2 z-20" />
                    ) : (
                      <input className="h-10 rounded-lg pl-3 outline-none z-20" />
                    )}
                  </div>
                );
              })}
              <button className="bg-electric-violet text-white py-2 rounded-lg text-lg font-semibold mt-2 hover:bg-cornflower-blue z-20 transition-all duration-300">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactSection;

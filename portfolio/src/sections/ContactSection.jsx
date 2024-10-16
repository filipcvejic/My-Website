import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Footer from "../components/Footer";
import ContactTitle from "../components/ContactTitle";
import { startAnimation } from "../../form-animation";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: "",
    company: "",
    email: "",
    inquiry: "",
  });

  useEffect(() => {
    startAnimation("contact-form");
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_ek9nuhs",
        "template_0yyojvd",
        formData,
        "xDej0fL66WYX0m_wZ"
      )
      .then((response) => {
        setFormData({
          full_name: "",
          company: "",
          email: "",
          inquiry: "",
        });

        toast.success("Email sent successfully");
      })
      .catch(() => toast.error("An error occured while sending"));
  };

  const contactLabels = [
    { label: "Full Name", property: "full_name" },
    { label: "Company", property: "company" },
    { label: "Email", property: "email" },
    { label: "Your Inquiry", property: "inquiry" },
  ];

  return (
    <div
      className="section flex flex-col contact-bg default:gap-14"
      id="contact"
    >
      <ToastContainer />
      <div className="flex flex-col items-center justify-between h-full default:gap-16">
        <Heading title={`Contact`} />
        <div className="flex justify-around w-full items-center h-full default:px-5">
          <div className="md:block default:hidden">
            <ContactTitle color={"majorelle-blue"} />
          </div>
          <div className="contact-form-wrapper relative overflow-hidden bg-transparent xl:max-w-[500px] md:max-w-[400px] w-full rounded-xl">
            <div className="contact-form-background-animation" />
            <form
              onSubmit={handleSubmit}
              className="contact-form relative border-[6px] overflow-hidden border-majorelle-blue border-transparent bg-electric-violet-20 rounded-xl p-8 flex flex-col gap-4"
            >
              {contactLabels.map((field, index) => {
                const isLastElement = index === contactLabels.length - 1;

                return (
                  <div className="flex flex-col gap-2" key={index}>
                    <label className="text-lg from-neutral-950 z-20">
                      {field.label}
                    </label>
                    {isLastElement ? (
                      <textarea
                        className="rounded-lg default:h-14 xsm:min-h-20 h-full outline-none pl-3 pt-2 z-20"
                        name={field.property}
                        onChange={handleChange}
                        value={formData[field.property]}
                        required
                      />
                    ) : (
                      <input
                        className="h-10 rounded-lg pl-3 outline-none z-20"
                        name={field.property}
                        type={field.property === "email" ? "email" : "text"}
                        onChange={handleChange}
                        value={formData[field.property]}
                        required
                      />
                    )}
                  </div>
                );
              })}
              <button className="bg-electric-violet text-white py-2 rounded-lg text-lg font-semibold mt-2 hover:bg-cornflower-blue z-20 transition-all duration-300 flex items-center justify-center">
                Send message
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

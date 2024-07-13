import Footer from "./components/Footer";
import Header from "./components/Header";
import SkillsList from "./components/SkillsList";
import "./index.css";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

import ProjectsSection from "./sections/ProjectsSection";

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </div>

    // <div className="relative w-screen h-screen  bg-blue-500 overflow-hidden">
    //   <Lottie animationData={animationData} />
    //   {/* <ul className="absolute inset-0 flex items-center justify-center">
    //     <li>Home</li>
    //     <li>About</li>
    //     <li>Projects</li>
    //     <li>Contact</li>
    //   </ul> */}
    //   <div className="absolute inset-36">
    //     <div className="bg-cover hero-bg flex flex-col col gap-6 justify-center items-center h-full rounded-3xl">
    //       <h1 className="text-white text-5xl md:text-7xl">Hello I'm Filip</h1>
    //       <h1>I'm a Full Stack Web Developer</h1>
    //       <button className="border-majorelle-blue border-2 px-10 py-3 rounded-full text-majorelle-blue font-medium text-lg">
    //         View My Work
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;

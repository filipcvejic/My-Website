import Header from "./components/Header";
import "./index.css";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";
import HeroSection from "./sections/HeroSection";

const App = () => {
  return (
    <div className="relative overflow-x-hidden font-poppins">
      <Header />
      <div className="flex flex-col overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;

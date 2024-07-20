import Header from "./components/Header";
import "./index.css";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ProjectsSection from "./sections/ProjectsSection";

const App = () => {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <div className="flex flex-col">
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;

// Desktop Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// Mobile Components
import MobNavbar from "./mob-components/MobNavbar";
import MobHome from "./mob-components/MobHome";
import MobAbout from "./mob-components/MobAbout";
import MobSkills from "./mob-components/MobSkills";
import MobProjects from "./mob-components/MobProjects";
import MobContact from "./mob-components/MobContact";

const App = () => {
  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* --------- NAVBAR --------- */}
      <div className="hidden md:block">
        <Navbar />
      </div>
      <div className="block md:hidden">
        <MobNavbar />
      </div>

      <main className="relative z-10 pt-32 space-y-20">
        {/* --------- HOME SECTION --------- */}
        <div className="hidden md:block">
          <Home />
        </div>
        <div className="block md:hidden">
          <MobHome />
        </div>

        {/* --------- ABOUT SECTION --------- */}
        <div className="hidden md:block">
          <About />
        </div>
        <div className="block md:hidden">
          <MobAbout />
        </div>

        {/* --------- SKILLS SECTION --------- */}
        <div className="hidden md:block">
          <Skills />
        </div>
        <div className="block md:hidden">
          <MobSkills />
        </div>

        {/* --------- PROJECTS SECTION --------- */}
        <div className="hidden md:block">
          <Projects />
        </div>
        <div className="block md:hidden">
          <MobProjects />
        </div>

        {/* --------- CONTACT SECTION --------- */}
        <div className="hidden md:block">
          <Contact />
        </div>
        <div className="block md:hidden">
          <MobContact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;

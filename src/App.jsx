import { useState, useEffect } from "react";

// Desktop Components
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import EducationSection from "./pages/Education";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

// Mobile Components
import MobNavbar from "./mob-components/MobNavbar";
import MobHome from "./mob-components/MobHome";
import MobAbout from "./mob-components/MobAbout";
import MobExperience from "./mob-components/MobExperience";
import MobEducation from "./mob-components/MobEducation";
import MobSkills from "./mob-components/MobSkills";
import MobProjects from "./mob-components/MobProjects";
import MobContact from "./mob-components/MobContact";

// Layout and Loader
import Layout from "./components/Layout";
import Loader from "./components/Loader";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1725);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout>
      {loading && <Loader />}

      {!loading && (
        <>
          {/* NAVBAR */}
          <div className="hidden md:block">
            <Navbar />
          </div>
          <div className="block md:hidden">
            <MobNavbar />
          </div>

          {/* MAIN CONTENT */}
          <main className="relative z-10 pt-32 space-y-20">
            <div className="hidden md:block">
              <Home />
            </div>
            <div className="block md:hidden">
              <MobHome />
            </div>

            <div className="hidden md:block">
              <About />
            </div>
            <div className="block md:hidden">
              <MobAbout />
            </div>

            <div className="hidden md:block">
              <Experience />
            </div>
            <div className="block md:hidden">
              <MobExperience />
            </div>

            <div className="hidden md:block">
              <EducationSection />
            </div>
            <div className="block md:hidden">
              <MobEducation />
            </div>

            <div className="hidden md:block">
              <Skills />
            </div>
            <div className="block md:hidden">
              <MobSkills />
            </div>

            <div className="hidden md:block">
              <Projects />
            </div>
            <div className="block md:hidden">
              <MobProjects />
            </div>

            <div className="hidden md:block">
              <Contact />
            </div>
            <div className="block md:hidden">
              <MobContact />
            </div>
          </main>

          <Footer />
        </>
      )}
    </Layout>
  );
};

export default App;

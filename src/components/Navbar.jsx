import { useEffect, useState } from "react";
import GlassCard from "./GlassCard";
import { Github, Instagram, Linkedin } from "lucide-react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";

const Navbar = () => {
  const navItems = [
    { id: "home", offset: -150 },
    { id: "about", offset: -120 },
    { id: "experience", offset: -60 },
    { id: "education", offset: -80 },
    { id: "skills", offset: -50 },
    { id: "projects", offset: -17 },
    { id: "contact", offset: -100 },
  ];

  const [activeSection, setActiveSection] = useState("home");

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach(({ id }) => {
        const el = document.getElementById(id);

        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // trigger once initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-400 origin-left z-[999]"
        style={{ scaleX: progress }}
      />

      {/* Navbar */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-4rem)] max-w-7xl">
        <GlassCard className="flex items-center justify-between py-5 px-10 rounded-full shadow-xl backdrop-blur-xl bg-white/10 border border-white/20">
          {/* Logo */}
          <div className="text-3xl font-bold tracking-wide text-white flex items-center gap-1">
            <span className="text-blue-400">vip</span>
            <span>folio</span>
            <span className="text-blue-400 animate-blink">_</span>
          </div>

          {/* Nav Links */}
          <ul className="flex space-x-10">
            {navItems.map((item) => (
              <li key={item} className="relative">
                <Link
                  to={item.id}
                  smooth={true}
                  spy={true}
                  offset={item.offset}
                  duration={500}
                  className={`text-white text-lg font-medium transition-colors duration-300 cursor-pointer ${
                    activeSection === item.id
                      ? "text-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {item.id.charAt(0).toUpperCase() + item.id.slice(1)}

                  {/* AnimatePresence underline effect */}
                  <AnimatePresence mode="wait">
                    {activeSection === item && (
                      <motion.div
                        key="underline"
                        className="absolute left-0 right-0 -bottom-1 h-[2px] bg-blue-400 rounded-full"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        exit={{ opacity: 0, scaleX: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </AnimatePresence>
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/vippium/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Github size={28} />
            </a>
            <a
              href="https://instagram.com/vip.in_jpr.sanganer"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-pink-400 transition-colors"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://linkedin.com/in/vipin~prajapat"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </GlassCard>
      </nav>
    </>
  );
};

export default Navbar;

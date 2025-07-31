import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Link } from "react-scroll";
import GlassCard from "../components/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "m-home", label: "Home", offset: -250 },
  { id: "m-about", label: "About", offset: -70 },
  { id: "m-experience", label: "Experience", offset: -150 },
  { id: "m-education", label: "Education", offset: -120 },
  { id: "m-skills", label: "Skills", offset: -70 },
  { id: "m-projects", label: "Projects", offset: -120 },
  { id: "m-contact", label: "Contact", offset: -10 },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Animated Navbar Container */}
      <motion.nav
        className="fixed top-4 inset-x-0 z-50 w-[85%] max-w-[320px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.4,
          ease: "easeOut",
        }}
      >
        <GlassCard className="relative flex items-center justify-center px-6 py-4 rounded-full shadow-md backdrop-blur-lg bg-white/5 border border-white/15">
          {/* Centered Logo */}
          <div className="text-4xl font-bold tracking-wide text-white flex items-center gap-1">
            <span className="text-blue-400">vip</span>
            <span>folio</span>
            <span className="text-blue-400 animate-blink">_</span>
          </div>

          {/* Animated Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-5 text-white focus:outline-none"
            initial={false}
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <motion.div
              key={isOpen ? "x" : "chevron"}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={22} /> : <ChevronDown size={22} />}
            </motion.div>
          </motion.button>
        </GlassCard>
      </motion.nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
            }}
            exit={{
              opacity: 0,
              y: -20,
              backdropFilter: "blur(0px)",
              backgroundColor: "rgba(255,255,255,0)",
            }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed top-28 left-0 right-0 mx-auto z-40 px-6 w-full max-w-[67%] rounded-3xl shadow-md border border-white/15 flex flex-col items-center py-4"
            style={{
              WebkitBackdropFilter: "blur(16px)",
              backdropFilter: "blur(20px)",
              backgroundColor: "rgba(255, 255, 255, 0.06)",
            }}
          >
            {navItems.map(({ id, label, offset }) => (
              <Link
                key={id}
                to={id}
                smooth={true}
                spy={true}
                offset={offset}
                duration={500}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-medium py-2 w-full text-center hover:text-blue-400 transition-colors cursor-pointer"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobNavbar;

import { useState } from "react";
import { EllipsisVertical, X } from "lucide-react";
import { Link } from "react-scroll";
import GlassCard from "../components/GlassCard";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "m-home", label: "Home" },
  { id: "m-about", label: "About" },
  { id: "m-skills", label: "Skills" },
  { id: "m-projects", label: "Projects" },
  { id: "m-contact", label: "Contact" },
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar Container */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[85%]">
        <GlassCard className="relative flex items-center justify-center px-6 py-2.5 rounded-full shadow-md backdrop-blur-lg bg-white/10 border border-white/20">
          {/* Centered Logo */}
          <div className="text-2xl font-bold tracking-wide text-white flex items-center gap-1">
            <span className="text-blue-400">vip</span>
            <span>folio</span>
            <span className="text-blue-400 animate-blink">_</span>
          </div>

          {/* Toggle Button  */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute right-5 text-white focus:outline-none"
          >
            {isOpen ? <X size={23} /> : <EllipsisVertical size={23} />}
          </button>
        </GlassCard>
      </nav>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 mx-auto z-40 px-6"
          >
            <GlassCard className="flex flex-col items-center py-6 rounded-3xl shadow-md backdrop-blur-xl bg-white/10 border border-white/20 w-full max-w-[85%] mx-auto">
              {navItems.map(({ id, label }) => (
                <Link
                  key={id}
                  to={id}
                  smooth={true}
                  spy={true}
                  offset={-100}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium py-2 w-full text-center hover:text-blue-400 transition-colors cursor-pointer"
                >
                  {label}
                </Link>
              ))}
            </GlassCard>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobNavbar;

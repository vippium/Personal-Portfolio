import React from "react";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ProfileImage from "../assets/personal_image.png";

const MobHome = () => {
  return (
    <motion.section
      id="m-home"
      className="flex flex-col items-center text-center px-6 md:hidden pt-16 pb-5"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
        delay: 0.4,
      }}
    >
      {/* Profile Image */}
      <div className="w-60 h-60 rounded-full overflow-hidden mb-6 shadow-lg">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Animated Name with Typing */}
      <h1 className="text-white text-3xl font-extrabold mb-4 leading-tight">
        Hi, I'm{" "}
        <TypeAnimation
          sequence={[
            "Vipin Prajapat",
            2500,
            "Frontend Dev",
            2500,
            "UI Designer",
            2500,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-blue-400 inline-block"
          cursor={true}
        />
      </h1>

      {/* Tagline */}
      <p className="text-white text-lg mb-10 leading-relaxed">
        A front-end developer passionate about turning ideas into interactive,
        pixel-perfect web experiences.
      </p>

      {/* Resume Download */}
      <a
        href="/resume.pdf"
        download
        className="bg-blue-500 hover:bg-blue-600 text-white px-7 py-4 rounded-full font-semibold transition"
      >
        <Download className="inline-block mr-2" size={18} />
        My Resume
      </a>
    </motion.section>
  );
};

export default MobHome;

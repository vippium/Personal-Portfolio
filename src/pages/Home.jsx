import React from "react";
import { Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ProfileImage from "../assets/image.png"; // Replace with your actual image

const Home = () => {
  return (
    <section
      id="home"
      className="h-[80vh] flex flex-col md:flex-row items-center justify-center px-6 md:px-16"
    >
      {/* Left Content with Animation */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="text-center md:text-left max-w-xl"
      >
        {/* Animated Heading */}
        <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
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

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-white text-lg md:text-xl mb-8 leading-relaxed"
        >
          A front-end developer passionate about turning ideas into interactive,
          pixel-perfect web experiences.
        </motion.p>

        {/* Resume Button */}
        <motion.a
          href="/resume.pdf"
          download
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition-all duration-300"
        >
          <Download size={20} />
          Resume
        </motion.a>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="mt-12 md:mt-0 md:ml-16"
      >
        <div className="w-72 h-80 rounded-full overflow-hidden shadow-lg">
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;

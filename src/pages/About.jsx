import React from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";
import GlassCard from "../components/GlassCard";

const About = () => {
  return (
    <section
      id="about"
      className="px-6 md:px-20 py-12 flex flex-col items-center justify-center"
    >
      {/* Animate full block */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="w-full max-w-5xl flex flex-col items-center"
      >
        {/* Section Title */}
        <div className="flex items-center gap-4 mb-10">
          <UserRound className="text-blue-400 w-10 h-10" />
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Me
          </h2>
        </div>

        {/* GlassCard */}
        <GlassCard
          className="p-6 md:p-10 bg-white/5 hover:bg-white/10 transition-all duration-300 
          rounded-2xl text-white shadow-md hover:shadow-[0_0_15px_rgba(0,255,255,0.1)]"
        >
          <p className="text-lg md:text-xl leading-relaxed text-center text-white/90">
            I’m a{" "}
            <span className="text-blue-400 font-semibold">
              Frontend Developer
            </span>{" "}
            who thrives at the intersection of creativity and code. I build
            beautiful, responsive interfaces using tools like{" "}
            <span className="font-medium">React, Tailwind, and Vite</span> — not
            just for work, but for the sheer joy of learning and creating.
            <br />
            <br />
            I believe good design is invisible, and great design speaks without
            shouting. Whether it’s a clean layout or a smooth animation, I
            obsess over the little things that make big impressions.
            <br />
            <br />
            Currently on the hunt for opportunities to grow as a developer and
            build things that matter. I'm always learning, always refining — a{" "}
            <span className="italic text-pink-400">night owl</span> with a love
            for minimalism and a code editor that never sleeps.
          </p>
        </GlassCard>
      </motion.div>
    </section>
  );
};

export default About;

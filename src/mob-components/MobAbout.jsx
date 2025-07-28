import React from "react";
import { motion } from "framer-motion";
import { UserRound } from "lucide-react";

const MobAbout = () => {
  return (
    <section id="about" className="px-6 py-10">
      {/* Title + Icon animated on scroll into view */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <UserRound className="text-blue-400 w-7 h-7" />
        <h2 className="text-2xl font-bold text-white">About Me</h2>
      </motion.div>

      {/* Paragraph content animated separately on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true, amount: 0.5 }}
        className="text-white text-[13.5px] leading-relaxed bg-white/5 border border-white/10 rounded-3xl p-5 shadow-md text-center"
      >
        I’m a{" "}
        <span className="text-blue-400 font-semibold">Frontend Developer</span>{" "}
        who thrives at the intersection of creativity and code. I build
        beautiful, responsive interfaces using tools like{" "}
        <span className="font-medium">React, Tailwind, and Vite</span> — not
        just for work, but for the sheer joy of learning and creating.
        <br />
        <br />
        I believe good design is invisible, and great design speaks without
        shouting. Whether it’s a clean layout or a smooth animation, I obsess
        over the little things that make big impressions.
        <br />
        <br />
        Currently on the hunt for opportunities to grow as a developer and build
        things that matter. I'm always learning, always refining — a{" "}
        <span className="italic text-pink-400">night owl</span> with a love for
        minimalism and a code editor that never sleeps.
      </motion.div>
    </section>
  );
};

export default MobAbout;

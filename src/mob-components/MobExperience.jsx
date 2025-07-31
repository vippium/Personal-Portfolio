import React from "react";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import WisfluxLogo from "../assets/wisflux_logo.png";
import SkybriskLogo from "../assets/skybrisk.png";

const experienceData = [
  {
    role: "React.js Development Intern",
    company: "The Skybrisk",
    period: "Since Jun 2025",
    description: [
      "Developing responsive UIs using React.js and Tailwind CSS.",
      "Implementing reusable components to optimize performance.",
    ],
    logo: SkybriskLogo,
  },
  {
    role: "MERN Stack Development Intern",
    company: "Wisflux Tech Labs",
    period: "Jan 2025 – Apr 2025",
    description: [
      "Converted Figma designs into responsive MERN components.",
      "Integrated animations using GSAP for interactive UX.",
      "Collaborated with backend team on API integration.",
    ],
    logo: WisfluxLogo,
  },
];

const MobExperience = () => {
  return (
    <section id="m-experience" className="px-6 py-2">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <Briefcase className="text-blue-400 w-10 h-10" />
        <h2 className="text-4xl font-bold text-white">Experience</h2>
      </motion.div>

      {/* Experience Cards */}
      <div className="space-y-6">
        {experienceData.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 border border-white/25 rounded-3xl p-5 shadow-md"
          >
            {/* Top Row: Logo + Text */}
            <div className="flex items-center gap-4 mb-4">
              {/* Logo */}
              <img
                src={exp.logo || fallbackLogo}
                alt={exp.company}
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = fallbackLogo;
                }}
                className="w-20 h-20 object-contain rounded-3xl"
              />

              {/* Title + Company */}
              <div className="text-white">
                <h3 className="text-xl font-semibold text-blue-400">
                  {exp.role}
                </h3>
                <p className="text-base text-white/80">{exp.company}</p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-outside space-y-1 text-sm text-white/90 pl-5">
              {exp.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobExperience;

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import ParulLogo from "../assets/parul_university.png";
import BitMesraLogo from "../assets/bit_mesra.png";

const educationData = [
  {
    degree: "Master of Computer Applications",
    institute: "Parul University",
    period: "2023 – 2025",
    description: ["Expected to graduate in Oct 2025"],
    logo: ParulLogo,
  },
  {
    degree: "Bachelor of Computer Applications",
    institute: "BIT Mesra - Jaipur Campus",
    period: "2020 – 2023",
    description: ["Graduated with First Class Division"],
    logo: BitMesraLogo,
  },
];

const MobEducation = () => {
  return (
    <section id="m-education" className="px-6 py-16">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
        className="flex items-center justify-center gap-3 mb-6"
      >
        <GraduationCap className="text-indigo-400 w-10 h-10" />
        <h2 className="text-4xl font-bold text-white">Education</h2>
      </motion.div>

      {/* Education Cards */}
      <div className="space-y-6">
        {educationData.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-5 shadow-md"
          >
            {/* Top Row: Logo + Text */}
            <div className="flex items-center gap-4 mb-4">
              <div className="min-w-[80px] min-h-[80px] flex items-center justify-center rounded-3xl overflow-hidden">
                <img
                  src={edu.logo}
                  alt={edu.company}
                  onError={(e) => {
                    e.currentTarget.src = fallbackLogo;
                  }}
                  className="w-20 h-20 object-contain"
                />
              </div>

              <div className="text-white">
                <h3 className="text-xl font-semibold text-blue-400">
                  {edu.degree}
                </h3>
                <p className="text-base text-white/80">{edu.institute}</p>
              </div>
            </div>

            {/* Bullet Points */}
            <ul className="list-disc list-outside space-y-1 text-sm text-white/90 pl-5">
              {edu.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MobEducation;

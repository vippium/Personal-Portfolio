import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import { GraduationCap } from "lucide-react";
import ParulCollege from "../assets/parul_university.png";
import BitMesra from "../assets/bit_mesra.png";

const educationData = [
  {
    degree: "Master of Computer Applications",
    institute: "Parul University",
    period: "2023 – 2025",
    description: ["Expected to graduate in Oct 2025"],
    logo: ParulCollege,
  },
  {
    degree: "Bachelor of Computer Applications ",
    institute: "Birla Institute of Technology",
    period: "2020 – 2023",
    description: ["Graduated with 71.4% (First Class)"],
    logo: BitMesra,
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: "easeOut",
    },
  }),
};

const EducationSection = () => {
  return (
    <section
      id="education"
      className="px-6 md:px-20 py-16 flex flex-col items-center justify-center"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-4 mb-8"
      >
        <GraduationCap className="text-indigo-400 w-9 h-9" />
        <h2 className="text-4xl md:text-4xl font-bold text-white">Education</h2>
      </motion.div>

      {/* Main Glass Wrapper */}
      <GlassCard className="w-full max-w-4xl bg-white/5 p-6 md:p-16 rounded-3xl backdrop-blur-md shadow-lg">
        <div className="flex flex-col gap-5 items-center">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="w-full max-w-2xl"
            >
              {/* Inner Card */}
              <div className="flex items-start gap-5 p-4 md:p-6 bg-white/5 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:shadow-md">
                {/* Placeholder Logo (optional) */}
                <div className="min-w-[72px] min-h-[72px] flex items-center justify-center rounded-3xl overflow-hidden">
                  <img
                    src={edu.logo}
                    alt={edu.institute}
                    onError={(e) => {
                      e.currentTarget.src = fallbackLogo;
                    }}
                    className="w-24 h-24 object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 text-white w-full">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-base md:text-xl font-semibold text-blue-400">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-medium px-2.5 py-0.5 bg-green-500/20 text-green-300 rounded-full shadow-sm">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-base text-white/80 mb-3">
                    {edu.institute}
                  </p>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-base text-white">
                    {edu.description.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </section>
  );
};

export default EducationSection;

import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
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

const fallbackLogo = "/logos/placeholder.png";

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

const ExperienceSection = () => {
  return (
    <section
      id="experience"
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
        <Briefcase className="text-blue-400 w-9 h-9" />
        <h2 className="text-4xl md:text-4xl font-bold text-white">
          Work Experience
        </h2>
      </motion.div>

      {/* Main Glass Wrapper */}
      <GlassCard className="w-full max-w-4xl bg-white/5 p-6 md:p-16 rounded-3xl backdrop-blur-md shadow-lg">
        <div className="flex flex-col gap-5 items-center">
          {experienceData.map((exp, i) => (
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
              <div className="flex items-center gap-5 p-4 md:p-6 bg-white/5 rounded-3xl transition-all duration-300 hover:bg-white/10 hover:shadow-md">
                {/* Logo Centered */}
                <div className="min-w-[72px] min-h-[72px] flex items-center justify-center rounded-3xl overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={exp.company}
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
                      {exp.role}
                    </h3>
                    <span
                      className={`text-xs font-medium px-2.5 py-0.5 rounded-full shadow-sm ${
                        exp.period.includes("Since")
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-green-500/20 text-green-300"
                      }`}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-base text-white/80 mb-3">{exp.company}</p>
                  <ul className="list-disc list-outside pl-5 space-y-1 text-base text-white">
                    {exp.description.map((point, index) => (
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

export default ExperienceSection;

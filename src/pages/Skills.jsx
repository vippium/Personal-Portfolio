import React from "react";
import { motion } from "framer-motion";
import { BrainCog, FlaskConical, BadgeCheck } from "lucide-react";
import GlassCard from "../components/GlassCard";
import clsx from "clsx";
import { TbBrandCSharp } from "react-icons/tb";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiVite,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiNpm,
} from "react-icons/si";

// Skill groups
const skillCards = [
  {
    title: "Front-End Lab",
    icon: <FlaskConical className="w-12 h-9 text-white" />,
    gridCols: 3,
    skills: [
      { name: "React", icon: <SiReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-300" />,
      },
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "Vite", icon: <SiVite className="text-purple-400" /> },
    ],
  },
  {
    title: "Workflow Essentials",
    icon: <BrainCog className="w-12 h-9 text-white" />,
    gridCols: 4,
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
      { name: "Git", icon: <SiGit className="text-orange-400" /> },
      { name: "GitHub", icon: <SiGithub className="text-white" /> },
      { name: "Postman", icon: <SiPostman className="text-orange-300" /> },
      { name: "NPM", icon: <SiNpm className="text-red-500" /> },
      { name: "C", icon: <TbBrandCSharp className="text-purple-500" /> },
    ],
  },
];

// Animations
const headingVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.2,
    },
  }),
};

const iconVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: i * 0.05,
      type: "spring",
    },
  }),
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen px-6 md:px-20 py-20 flex flex-col items-center justify-center"
    >
      {/* Section Heading with Animation */}
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <BadgeCheck className="text-green-400 w-10 h-10" />
        <h2 className="text-4xl md:text-5xl font-bold text-white">Skills</h2>
      </motion.div>

      {/* Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl">
        {skillCards.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard
              className="p-6 md:p-10 flex flex-col items-center gap-6 text-center
              bg-white/5 hover:bg-white/10 transition-all duration-300
              hover:shadow-[0_0_15px_rgba(0,255,255,0.1)] rounded-2xl"
            >
              <h3 className="text-2xl md:text-3xl text-white font-semibold border-b border-white/10 pb-2 flex items-center gap-2">
                {card.icon}
                {card.title}
              </h3>

              <div
                className={clsx("gap-x-[3rem] gap-y-10 mt-4 grid", {
                  "grid-cols-3": card.gridCols === 3,
                  "grid-cols-4": card.gridCols === 4,
                })}
              >
                {card.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={iconVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.15 }}
                    className="group flex flex-col items-center transition-all"
                  >
                    <div className="rounded-3xl p-4 bg-white/5 hover:bg-white/10 transition-all duration-300 shadow-md">
                      <div className="text-3xl">{skill.icon}</div>
                    </div>
                    <p className="mt-3 text-white text-sm font-medium">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

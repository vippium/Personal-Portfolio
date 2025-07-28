import React from "react";
import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import {
  ExternalLink,
  Github,
  LayoutTemplate,
  Clock,
  Boxes,
} from "lucide-react";

// Project Data
const projects = [
  {
    name: "Bookstore Management System",
    description:
      "A full-stack web app designed for managing bookstore inventory, streamlining customer interactions, and enhancing the user experience through a clean UI and organized workflow.",
    github: "https://github.com/vippium/Bookstore-Management-System",
    live: "https://bookstore-vippium.vercel.app/",
    image:
      "https://img.freepik.com/free-vector/smiling-people-standing-line-book-store_74855-14515.jpg",
    status: "Completed",
    techStack: ["Full MERN", "Tailwind", "Vite", "MongoDB"],
  },
  {
    name: "ERP Management System",
    description:
      "A new project is currently brewing in the shadows — something exciting is on its way! Stay tuned as I shape it into life.",
    github: null,
    live: null,
    image: null,
    status: "In Progress",
    techStack: ["Coming Soon"],
  },
];

// Animation Variants
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
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
    },
  }),
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-6 md:px-20 py-20 flex flex-col items-center justify-center"
    >
      {/* Section Title with animation */}
      <motion.div
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <LayoutTemplate className="text-sky-400 w-10 h-10" />
        <h2 className="text-4xl md:text-5xl font-bold text-white">Projects</h2>
      </motion.div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <GlassCard className="p-4 md:p-6 flex flex-col gap-4 h-full bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]">
              {/* Project Image */}
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover rounded-xl mb-2"
                />
              ) : (
                <div className="w-full h-48 bg-white/5 rounded-xl flex items-center justify-center text-white/30 text-xl">
                  <Clock className="w-6 h-6 mr-2" />
                  {project.status}
                </div>
              )}

              {/* Title + Description */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold text-white">
                  {project.name}
                </h3>
                {project.description && (
                  <p className="text-white/80 text-sm leading-relaxed">
                    {project.description}
                  </p>
                )}
              </div>

              {/* Tech Stack */}
              {project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/70 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Links + Status */}
              <div className="flex items-center gap-4 mt-auto pt-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-white transition"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
                <span className="text-xs ml-auto px-3 py-1 rounded-full bg-white/10 text-white/60">
                  {project.status}
                </span>
              </div>
            </GlassCard>
          </motion.div>
        ))}

        {/* "Coming Soon" Card */}
        <motion.div
          variants={cardVariant}
          custom={projects.length}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <GlassCard className="p-6 md:p-10 flex flex-col items-center justify-center text-center text-white/80 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-2xl h-full space-y-2">
            <Boxes className="w-20 h-20 text-white/30 mb-2" />
            <p className="text-white/50 text-xl italic">Coming Soon...</p>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

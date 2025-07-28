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
  },
  {
    name: "ERP Management System",
    description:
      "A new project is currently brewing in the shadows — something exciting is on its way! Stay tuned as I shape it into life.",
    github: null,
    live: null,
    image: null,
    status: "",
    techStack: ["Coming Soon"],
  },
  {
    name: "Coming Soon",
    comingSoon: true,
  },
];

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

const ProjectsSection = () => {
  return (
    <section
      id="m-projects"
      className="min-h-screen px-6 md:px-20 py-20 flex flex-col items-center justify-center relative"
    >
      {/* Section Heading */}
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

      {/* Horizontal Scroll Container */}
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory w-full max-w-full px-2 md:px-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[90%] sm:w-[400px] max-w-[400px]"
          >
            <GlassCard className="p-4 md:p-6 flex flex-col gap-4 h-[450px] bg-white/5 hover:bg-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(0,255,255,0.15)]">
              {/* Coming Soon Card */}
              {project.comingSoon ? (
                <div className="flex flex-col items-center justify-center text-center text-white/80 space-y-3 h-full py-12">
                  <Boxes className="w-16 h-16 text-white/30" />
                  <p className="text-white/50 text-xl italic">Coming Soon...</p>
                </div>
              ) : (
                <>
                  {/* Project Image */}
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-40 object-cover rounded-2xl mb-1"
                    />
                  ) : (
                    <div className="w-full h-40 bg-white/5 rounded-2xl flex items-center justify-center text-white/30 text-xl">
                      <Clock className="w-6 h-6 mr-2" />
                      {project.status?.trim() || "In Progress"}
                    </div>
                  )}

                  {/* Project Title */}
                  <h3 className="text-lg font-semibold text-center text-white">
                    {project.name}
                  </h3>

                  {/* Description */}
                  {project.description && (
                    <p className="text-white/80 text-sm leading-relaxed text-center">
                      {project.description}
                    </p>
                  )}

                  {/* Tech Stack */}
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="flex flex-wrap justify-center gap-2 mt-2">
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

                  {/* Links & Status */}
                  <div className="flex items-center justify-between mt-auto pt-4 w-full">
                    <div className="flex items-center gap-4">
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
                    </div>

                    {/* Status badge */}
                    {typeof project.status === "string" &&
                      project.status.trim() !== "" && (
                        <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white/60 whitespace-nowrap">
                          {project.status}
                        </span>
                      )}
                  </div>
                </>
              )}
            </GlassCard>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

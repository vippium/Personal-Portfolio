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
    name: "CRM Software Project",
    description:
      "A full-stack web-based CRM to manage leads, customers, tasks, and sales pipelines with secure authentication, role-based access, and a user-friendly dashboard for improved team productivity.",
    github: "https://github.com/vippium/CRM-Software-Project",
    live: null,
    image:
      "https://www.softwaresuggest.com/blog/wp-content/uploads/2024/04/top-crm-implementation-challenges-steps-to-overcoming-them.jpg",
    status: "Completed",
  },
  {
    name: "ERP Management System",
    description:
      "A full-featured ERP system is in the works — streamlining business operations, managing resources efficiently, and enhancing productivity. Stay tuned for the launch !!",
    github: null,
    live: null,
    image: null,
    status: "Coming Soon",
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
      className="px-3 md:px-20 py-20 flex flex-col items-center justify-center relative"
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
      <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory w-full max-w-full px-1 md:px-10">
        {projects.map((project, i) => (
          <div
            key={i}
            className="snap-center shrink-0 w-[90%] sm:w-[400px] max-w-[400px]"
          >
            <GlassCard className="p-4 md:p-6 flex flex-col gap-4 h-[450px] bg-white/5 border border-white/20">
              {/* Coming Soon Card */}
              {project.comingSoon ? (
                <div className="flex flex-col items-center justify-center text-center text-white/80 space-y-3 h-full py-12">
                  <Boxes className="w-16 h-16 text-white/30" />
                  <p className="text-white/50 text-xl italic">
                    Stay Tuned for More...
                  </p>
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
                    <div className="w-full h-40 bg-white/5 rounded-2xl flex items-center justify-center text-white/60 text-xl">
                      <Clock className="w-6 h-6 mr-2" />
                      {project.status?.trim() || "In Progress"}
                    </div>
                  )}

                  {/* Project Title */}
                  <h3 className="text-xl font-semibold text-center text-white">
                    {project.name}
                  </h3>

                  {/* Description */}
                  {project.description && (
                    <p className="text-white/80 text-sm leading-relaxed text-center">
                      {project.description}
                    </p>
                  )}

                  {/* Coming Soon Badge (based on techStack) */}
                  {project.techStack?.includes("Coming Soon") && (
                    <span className="text-xs px-3 py-1 rounded-full bg-yellow-400/20 text-yellow-300 font-medium self-center mt-1">
                      Coming Soon
                    </span>
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
                        <span
                          className={`
        text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap
        ${
          project.status === "Completed"
            ? "bg-green-500/20 text-green-400"
            : project.status === "In Progress"
            ? "bg-orange-500/20 text-orange-400"
            : "bg-blue-500/20 text-blue-400"
        }
      `}
                        >
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

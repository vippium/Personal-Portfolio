import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BadgeCheck, BrainCog, FlaskConical } from "lucide-react";
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

const MobSkills = () => {
  const skillCards = [
    {
      title: "Front-End Lab",
      icon: <FlaskConical className="w-8 h-8 text-white" />,
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
      icon: <BrainCog className="w-8 h-8 text-white" />,
      gridCols: 3,
      skills: [
        { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
        { name: "Express.js", icon: <SiExpress className="text-white" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
        { name: "Git", icon: <SiGit className="text-orange-400" /> },
        { name: "GitHub", icon: <SiGithub className="text-white" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-300" /> },
        { name: "NPM", icon: <SiNpm className="text-red-500" /> },
        { name: "C#", icon: <TbBrandCSharp className="text-purple-500" /> },
      ],
    },
  ];

  const skillsPerPage = 6;

  // direction-aware animation variants
  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction) => ({
      x: direction < 0 ? 80 : -80,
      opacity: 0,
    }),
  };

  return (
    <section
      id="m-skills"
      className="px-6 py-12 flex flex-col items-center md:hidden"
    >
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center gap-3 mb-10"
      >
        <BadgeCheck className="text-green-400 w-10 h-10" />
        <h2 className="text-4xl font-bold text-white">Skills</h2>
      </motion.div>

      <div className="flex flex-col gap-12 w-full max-w-md">
        {skillCards.map((card, i) => {
          const [page, setPage] = useState(0);
          const [direction, setDirection] = useState(0);

          const totalPages = Math.ceil(card.skills.length / skillsPerPage);
          const start = page * skillsPerPage;
          const end = start + skillsPerPage;
          const visibleSkills = card.skills.slice(start, end);

          // pad with placeholders if fewer than 6
          const paddedSkills = [
            ...visibleSkills,
            ...Array(Math.max(0, skillsPerPage - visibleSkills.length)).fill(
              null
            ),
          ];

          const paginate = (newPage) => {
            if (newPage < 0 || newPage >= totalPages) return;
            setDirection(newPage > page ? 1 : -1);
            setPage(newPage);
          };

          return (
            <GlassCard
              key={i}
              className="p-8 flex flex-col items-center gap-5 text-center bg-white/5 rounded-3xl border border-white/20"
            >
              <h3 className="text-xl text-white font-semibold pb-2 flex items-center gap-2">
                {card.icon}
                {card.title}
              </h3>

              {/* Skills grid with swipe + animation */}
              <div className="relative w-full overflow-hidden">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={page}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.4 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.2}
                    onDragEnd={(e, { offset, velocity }) => {
                      if (offset.x < -80 || velocity.x < -500)
                        paginate(page + 1);
                      else if (offset.x > 80 || velocity.x > 500)
                        paginate(page - 1);
                    }}
                    className={clsx("gap-x-0 gap-y-8 mt-2 grid min-h-[200px]", {
                      "grid-cols-3": card.gridCols === 3,
                      "grid-cols-4": card.gridCols === 4,
                    })}
                  >
                    {paddedSkills.map((skill, idx) =>
                      skill ? (
                        <div
                          key={idx}
                          className="group flex flex-col items-center transition-all"
                        >
                          <div className="rounded-2xl p-3 bg-white/5 shadow-md">
                            <div className="text-2xl">{skill.icon}</div>
                          </div>
                          <p className="mt-2 text-white text-sm font-medium">
                            {skill.name}
                          </p>
                        </div>
                      ) : (
                        <div key={idx} className="opacity-0" />
                      )
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dots */}
              {totalPages > 1 && (
                <div className="flex gap-2 mt-5">
                  {Array.from({ length: totalPages }).map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => paginate(dotIdx)}
                      className={clsx(
                        "w-3 h-3 rounded-full transition-colors",
                        page === dotIdx
                          ? "bg-green-400"
                          : "bg-white/30 hover:bg-white/60"
                      )}
                    />
                  ))}
                </div>
              )}
            </GlassCard>
          );
        })}
      </div>
    </section>
  );
};

export default MobSkills;

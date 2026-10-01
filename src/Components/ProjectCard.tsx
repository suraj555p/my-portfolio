"use client";

import { motion } from "motion/react";
import type { ProjectData } from "./Project";
import { FaGithub } from "react-icons/fa";

interface ProjectCardProps {
  projects: ProjectData[];
}

function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <div className="mx-auto grid max-w-6xl gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.name}
          rel="noopener noreferrer"
          // Each card animates when IT enters the screen (works well on tall mobile layouts)
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
          whileHover={{ y: -6 }}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#26263a] bg-[#12121b] transition-colors hover:border-[#7c4dff]"
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={project.projectImage}
              alt={project.name}
              className="aspect-[16/10] w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <span className="absolute left-3 top-3 rounded-md bg-[#0b0b12]/70 px-2 py-1 text-xs font-semibold text-[#c4b5fd] backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="flex flex-1 flex-col p-4 sm:p-5">
            <h2 className="mb-2 text-lg font-semibold text-[#eae7f0] sm:text-xl">
              {project.name}
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-[#9a94ab] sm:text-base">
              {project.description}
            </p>

            <div className="mt-auto flex items-center justify-between gap-4">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-[#a78bfa] group-hover:text-[#c4b5fd]"
            >
              View Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <div>
               <a
                 href={project.github}
                 target="_blank"
                 rel="noopener noreferrer"
                 className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#a78bfa] group-hover:text-[#c4b5fd]"
               >
                 <FaGithub className="text-[#a78bfa] hover:text-[#c4b5fd]" />
               </a>
            </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export default ProjectCard;

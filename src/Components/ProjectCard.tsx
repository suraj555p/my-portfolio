"use client";

import { motion } from "framer-motion";
import type { ProjectData } from "./Project";

interface ProjectCardProps {
  projects: ProjectData[];
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

function ProjectCard({ projects }: ProjectCardProps) {
  return (
    <motion.div
      className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {projects.map((project, index) => (
        <motion.a
          key={project.name}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          variants={cardItem}
          transition={{ duration: 0.45 }}
          whileHover={{ y: -6 }}
          className="group block rounded-xl overflow-hidden bg-[#12121b] border border-[#26263a] hover:border-[#7c4dff] transition-colors"
        >
          <div className="relative overflow-hidden">
            <motion.img
              src={project.projectImage}
              alt={project.name}
              className="w-full h-44 object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
            <span className="absolute top-3 left-3 text-xs font-semibold text-[#c4b5fd] bg-[#0b0b12]/70 px-2 py-1 rounded-md backdrop-blur-sm">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          <div className="p-5">
            <h2 className="text-[#eae7f0] font-semibold text-lg mb-2">
              {project.name}
            </h2>
            <p className="text-base text-[#9a94ab] mb-4">
              {project.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-[#a78bfa] group-hover:text-[#c4b5fd]">
              View Project
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
}

export default ProjectCard;

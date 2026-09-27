"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export interface ProjectData {
  name: string;
  projectImage: string;
  description: string;
  link: string;
}

const projects: ProjectData[] = [
  {
    name: "Quiz Application",
    projectImage: "/quiz.png",
    description:
      "Production-level full-stack quiz app built with Next.js, Prisma, PostgreSQL, Tailwind CSS and Clerk authentication. Follows an exam-paper metaphor with separate admin and student roles for creating and attempting quizzes.",
    link: "https://online-quiz-app-zeta.vercel.app/",
  },
  {
    name: "Socially",
    projectImage: "/socially.png",
    description:
      "A full-stack social media app built with Next.js where users can create posts in image or video format and share short-form reels — with a dedicated feed to upload and watch them.",
    link: "https://sociallly-next-js-mrtx.vercel.app/",
  },
  {
    name: "Videotube",
    projectImage: "/videotube.png",
    description:
      "A full-stack video-sharing platform built with the MERN stack (MongoDB, Express, React, Node.js), letting users upload, browse and watch videos in a YouTube-style experience.",
    link: "https://vt-frontend-ebon.vercel.app/",
  },
];

export default function Project() {
  return (
    <div className="min-h-screen bg-[#0b0b12] py-24 px-6 md:px-12">
      <motion.div
        className="max-w-6xl mx-auto text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm tracking-[0.2em] text-[#a78bfa] font-medium mb-3">
          FEATURED PROJECTS
        </p>
        <h2
          className="text-3xl md:text-4xl font-semibold text-[#eae7f0] mb-3"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Some of My Recent Work
        </h2>
        <span className="inline-block w-14 h-[3px] bg-[#7c4dff] rounded-full" />
      </motion.div>

      <ProjectCard projects={projects} />
    </div>
  );
}

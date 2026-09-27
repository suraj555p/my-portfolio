"use client";

import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: string; // filename inside public/
}

const skills: Skill[] = [
  { name: "HTML", icon: "html5.png" },
  { name: "JavaScript", icon: "javascript.png" },
  { name: "TypeScript", icon: "typscript.webp" },
  { name: "Tailwind CSS", icon: "tailwindcss.jpeg" },
  { name: "Next.js", icon: "Nextjs.jpg" },
  { name: "Prisma ORM", icon: "prisma.png" },
  { name: "Node.js", icon: "nodejs.jpg" },
  { name: "MongoDB", icon: "mongodb.png" },
  { name: "Clerk", icon: "clerk.png" },
  { name: "React.js", icon: "react.svg" },
  { name: "Git", icon: "git.png" },
  { name: "GitHub", icon: "github.png" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
};

const cardItem = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative bg-[#0b0b12] text-[#eae7f0] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* ambient floating glow — animates continuously in the background */}
      <motion.div
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#7c4dff]/10 blur-3xl"
        animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-5xl mx-auto relative flex flex-col md:flex-row gap-10 md:gap-16">
        {/* vertical "Skills" label */}
        <motion.div
          className="flex md:flex-col items-center md:items-start gap-3 shrink-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-[3px] md:w-[3px] md:h-8 bg-[#7c4dff] rounded-full" />
          <span className="text-sm tracking-[0.5em] text-[#a78bfa] font-medium md:[writing-mode:vertical-rl] md:rotate-180">
            SKILLS
          </span>
        </motion.div>

        <div className="flex-1">
          <motion.h2
            className="text-4xl md:text-5xl font-semibold mb-12"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            What I Do
          </motion.h2>

          <motion.div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                variants={cardItem}
                transition={{ duration: 0.35 }}
                whileHover={{ y: -4 }}
                className="aspect-square flex flex-col items-center justify-center gap-3 rounded-xl bg-[#15151f] border border-[#26263a] hover:border-[#7c4dff] transition-colors p-4"
              >
                <img
                  src={`/${skill.icon}`}
                  alt={skill.name}
                  className="w-14 h-14 object-contain"
                  loading="lazy"
                />
                <span className="text-[11px] tracking-wide text-[#c8c4d4] text-center uppercase">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

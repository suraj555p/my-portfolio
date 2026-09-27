"use client";

import { motion } from "framer-motion";

/**
 * About section — matches the portfolio's dark + violet + serif theme.
 * Drop this in as app/components/About.tsx and use <About /> on your page.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-[#0b0b12] text-[#eae7f0] py-24 px-6 md:px-12 overflow-hidden"
    >
      {/* ambient floating glow — animates continuously in the background */}
      <motion.div
        className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#7c4dff]/10 blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-4xl mx-auto relative">
        <motion.p
          className="text-sm tracking-[0.2em] text-[#a78bfa] font-medium mb-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-8"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A Bit About Who I Am
        </motion.h2>

        <motion.div
          className="space-y-5 text-[#c8c4d4] text-xl leading-relaxed"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p>
            I'm Suraj, a web developer who's now deep into the JavaScript,
            TypeScript and React ecosystem. I work comfortably across the
            full stack — Next.js, Node.js, Express, Prisma and PostgreSQL,
            MongoDB — building everything from the UI down to the database.
          </p>
          <p>
            Most of what I know comes from building real, working projects
            on my own — a quiz platform, a social app with reels, a
            YouTube-style video app on MERN, and an online voting system —
            rather than just following tutorials. I'm currently aiming for
            fresher/entry-level full-stack roles.
          </p>
          <p>
            Alongside that, I also take on{" "}
            <span className="text-[#c4b5fd] font-medium">
              freelance projects for businesses
            </span>{" "}
            — building websites, dashboards and web apps end-to-end using
            the same stacks. If you have an idea or a business that needs a
            web presence, I can build it for you.
          </p>
        </motion.div>

        <motion.div
          className="mt-10 flex flex-wrap gap-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-[#7c4dff] text-white text-sm font-medium hover:bg-[#6a3dff] transition-colors"
          >
            Hire Me For Your Project
          </a>
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg border border-[#26263a] text-sm font-medium text-[#eae7f0] hover:border-[#7c4dff] transition-colors"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

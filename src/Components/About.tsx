"use client";

import { motion } from "motion/react";

/**
 * About section — matches the portfolio's dark + violet + serif theme.
 * Drop this in as app/components/About.tsx and use <About /> on your page.
 */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

// Every element animates when IT enters the screen (works well on tall mobile layouts)
const reveal = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, amount: 0.3 },
  variants: fadeUp,
} as const;

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b0b12] px-5 py-16 text-[#eae7f0] sm:px-6 sm:py-20 md:px-12 md:py-24"
    >
      {/* ambient floating glow — animates continuously in the background */}
      <motion.div
        className="pointer-events-none absolute -bottom-24 left-0 h-56 w-56 rounded-full bg-[#7c4dff]/10 blur-3xl sm:h-72 sm:w-72"
        animate={{ y: [0, -20, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto max-w-4xl">
        <motion.p
          className="mb-3 text-xs font-medium tracking-[0.2em] text-[#a78bfa] sm:text-sm"
          {...reveal}
          transition={{ duration: 0.5 }}
        >
          ABOUT ME
        </motion.p>

        <motion.h2
          className="mb-6 text-3xl font-semibold sm:mb-8 sm:text-4xl md:text-5xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          {...reveal}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          A Bit About Who I Am
        </motion.h2>

        <div className="space-y-4 text-base leading-relaxed text-[#c8c4d4] sm:space-y-5 sm:text-lg md:text-xl">
          <motion.p
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            I&apos;m Suraj, a web developer who&apos;s now deep into the
            JavaScript, TypeScript and React ecosystem. I work comfortably
            across the full stack — Next.js, Node.js, Express, Prisma and
            PostgreSQL, MongoDB — building everything from the UI down to the
            database.
          </motion.p>

          <motion.p
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Most of what I know comes from building real, working projects on
            my own — a quiz platform, a social app with reels, a YouTube-style
            video app on MERN, and an online voting system — rather than just
            following tutorials. I&apos;m currently aiming for
            fresher/entry-level full-stack roles.
          </motion.p>

          <motion.p
            {...reveal}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            Alongside that, I also take on{" "}
            <span className="font-medium text-[#c4b5fd]">
              freelance projects for businesses
            </span>{" "}
            — building websites, dashboards and web apps end-to-end using the
            same stacks. If you have an idea or a business that needs a web
            presence, I can build it for you.
          </motion.p>
        </div>

        <motion.div
          className="mt-8 flex flex-col gap-3 min-[480px]:flex-row sm:mt-10 sm:gap-4"
          {...reveal}
          transition={{ duration: 0.5 }}
        >
          <a
            href="#contact"
            className="rounded-lg bg-[#7c4dff] px-6 py-3 text-center text-sm font-medium text-white transition-colors hover:bg-[#6a3dff]"
          >
            Hire Me For Your Project
          </a>
          <a
            href="#projects"
            className="rounded-lg border border-[#26263a] px-6 py-3 text-center text-sm font-medium text-[#eae7f0] transition-colors hover:border-[#7c4dff]"
          >
            View My Work
          </a>
        </motion.div>
      </div>
    </section>
  );
}

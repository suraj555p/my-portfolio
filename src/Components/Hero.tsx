"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const backgroundImages = [
  "/image1.png",
  "/image2.webp",
  "/image3.jpg",
  "/image4.webp",
  "/image5.png",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(
        (previousImage) =>
          (previousImage + 1) % backgroundImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100vh-80px)] overflow-hidden">
      {/* ================= Animated Background ================= */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={backgroundImages[currentImage]}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
            }}
          >
            <Image
              src={backgroundImages[currentImage]}
              alt="Portfolio background"
              fill
              priority={currentImage === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Left side extra dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/20" />
      </div>

      {/* ================= Main Content ================= */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:min-h-[calc(100vh-80px)] md:grid-cols-2 md:py-20">
        {/* ================= Left Content ================= */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="mb-4 text-lg text-white/80">
            Hey, I&apos;m Suraj 👋
          </p>

          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
            <span className="text-violet-300">Full Stack</span>
            <br />
            Developer
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
            I&apos;m a full stack developer who loves building modern,
            beautiful and scalable web applications.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-lg bg-violet-600 px-6 py-3 font-medium text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-lg"
            >
              Get In Touch
            </Link>

            <Link
              href="#projects"
              className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white/20 hover:text-violet-200"
            >
              Browse Projects
            </Link>
          </div>
        </motion.div>

        {/* ================= Profile Image ================= */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <motion.div
            className="relative flex h-[350px] w-[350px] items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-2xl backdrop-blur-sm sm:h-[400px] sm:w-[400px]"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
           
            {/* Profile Image */}
            <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border-4 border-white/70  shadow-2xl sm:h-72 sm:w-72">
              <Image
                src="/my_profile.jpeg"
                alt="Suraj Parmar"
                fill
                priority
                sizes="(max-width: 640px) 256px, 288px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
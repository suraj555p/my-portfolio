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
        (previousImage) => (previousImage + 1) % backgroundImages.length,
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate min-h-[calc(100svh-80px)] overflow-hidden">
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
        <div className="absolute inset-0 bg-black/60 md:bg-black/55" />

        {/* Mobile: top-to-bottom gradient | Desktop: left-to-right gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 md:bg-gradient-to-r md:from-black/75 md:via-black/45 md:to-black/20" />
      </div>

      {/* ================= Main Content ================= */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 sm:px-6 sm:py-16 md:min-h-[calc(100svh-80px)] md:grid-cols-2 md:gap-12 md:py-20">
        {/* ================= Left Content ================= */}
        <motion.div
          className="order-2 text-center md:order-1 md:text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
          }}
        >
          <p className="mb-3 text-base text-white/80 sm:mb-4 sm:text-lg">
            Hey, I&apos;m Suraj 👋
          </p>

          <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white min-[400px]:text-5xl sm:text-6xl md:text-6xl lg:text-7xl">
            <span className="text-violet-300">Full Stack</span>
            <br />
            Developer
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/75 sm:mt-7 sm:text-lg sm:leading-8 md:mx-0">
            I&apos;m a full stack developer who loves building modern,
            beautiful and scalable web applications.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row min-[420px]:justify-center sm:mt-8 sm:gap-4 md:justify-start">
            <Link
              href="#contact"
              className="rounded-lg bg-violet-600 px-6 py-3 text-center font-medium text-white shadow-md transition duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-lg"
            >
              Get In Touch
            </Link>

            <Link
              href="#projects"
              className="rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-center font-medium text-white backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:bg-white/20 hover:text-violet-200"
            >
              Browse Projects
            </Link>
          </div>
        </motion.div>

        {/* ================= Profile Image ================= */}
        <motion.div
          className="order-1 flex justify-center md:order-2 md:justify-end"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
          }}
        >
          <motion.div
            className="relative flex h-[240px] w-[240px] items-center justify-center rounded-full border border-white/30 bg-white/10 shadow-2xl backdrop-blur-sm min-[400px]:h-[280px] min-[400px]:w-[280px] sm:h-[360px] sm:w-[360px] lg:h-[400px] lg:w-[400px]"
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
            <div className="relative z-10 h-44 w-44 overflow-hidden rounded-full border-4 border-white/70 shadow-2xl min-[400px]:h-52 min-[400px]:w-52 sm:h-64 sm:w-64 lg:h-72 lg:w-72">
              <Image
                src="/my_profile.jpeg"
                alt="Suraj Parmar"
                fill
                priority
                sizes="(max-width: 400px) 176px, (max-width: 640px) 208px, (max-width: 1024px) 256px, 288px"
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

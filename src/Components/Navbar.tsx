"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <motion.nav
      className="w-full bg-black backdrop-blur-md dark:bg-slate-900/70"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="text-2xl font-bold tracking-tight text-white transition hover:text-violet-600 sm:text-3xl"
          >
            My Portfolio <span className="text-violet-600">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/"
              className="font-medium text-violet-600 transition hover:text-violet-700"
            >
              Home
            </Link>

            <Link
              href="#skills"
              className="font-medium text-gray-400 transition hover:text-violet-600"
            >
              Skills
            </Link>

            <Link
              href="#projects"
              className="font-medium text-gray-400 transition hover:text-violet-600"
            >
              Projects
            </Link>

            <Link
              href="#about"
              className="font-medium text-gray-400 transition hover:text-violet-600"
            >
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="rounded-md p-2 text-white transition hover:bg-gray-800 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-gray-800 md:hidden"
            >
              <div className="flex flex-col gap-2 pb-5 pt-4">
                <Link
                  href="/"
                  onClick={closeMenu}
                  className="rounded-md px-4 py-3 font-medium text-violet-500 transition hover:bg-gray-800"
                >
                  Home
                </Link>

                <Link
                  href="#skills"
                  onClick={closeMenu}
                  className="rounded-md px-4 py-3 font-medium text-gray-300 transition hover:bg-gray-800 hover:text-violet-500"
                >
                  Skills
                </Link>

                <Link
                  href="#projects"
                  onClick={closeMenu}
                  className="rounded-md px-4 py-3 font-medium text-gray-300 transition hover:bg-gray-800 hover:text-violet-500"
                >
                  Projects
                </Link>

                <Link
                  href="#about"
                  onClick={closeMenu}
                  className="rounded-md px-4 py-3 font-medium text-gray-300 transition hover:bg-gray-800 hover:text-violet-500"
                >
                  About
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

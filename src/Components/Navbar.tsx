"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  // Close the mobile menu automatically when screen becomes desktop-size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.nav
      className="relative z-50 w-full bg-black backdrop-blur-md dark:bg-slate-900/70"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-20 items-center justify-between gap-3">
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            className="whitespace-nowrap text-xl font-bold tracking-tight text-white transition hover:text-violet-600 min-[380px]:text-2xl sm:text-3xl"
          >
            My Portfolio <span className="text-violet-600">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-medium transition ${
                  index === 0
                    ? "text-violet-600 hover:text-violet-700"
                    : "text-gray-400 hover:text-violet-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="-mr-2 shrink-0 rounded-md p-2 text-white transition hover:bg-gray-800 md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden border-t border-gray-800 md:hidden"
            >
              <div className="flex flex-col gap-1 pb-5 pt-3">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.05 * index }}
                  >
                    <Link
                      href={link.href}
                      onClick={closeMenu}
                      className={`block rounded-md px-4 py-3 text-base font-medium transition hover:bg-gray-800 ${
                        index === 0
                          ? "text-violet-500"
                          : "text-gray-300 hover:text-violet-500"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

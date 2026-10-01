"use client";

import { type FormEvent } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  ArrowUp,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube } from "react-icons/fa";

/**
 * Contact section — dark navy + blue/purple gradient theme.
 * Drop this in as app/components/GetInTouch.tsx and use <GetInTouch /> on your page.
 *
 * Layout:
 *  - Mobile  : single column (intro + details, then the form, then footer)
 *  - Desktop : two columns (intro + details on the left, form on the right)
 */

const CONTACTS = [
  {
    icon: Mail,
    label: "Email",
    value: "suraj87parmar@gmail.com",
    href: "mailto:suraj87parmar@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 62657 81890",
    href: "tel:+916265781890",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "AB Road, ShagunCity, Manpur, Indore, Madhya Pradesh, India",
    href: undefined,
  },
];

// TODO: replace the "#" links with your real profile URLs
const SOCIALS = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/suraj555p" },
  { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaYoutube, label: "YouTube", href: "#" },
];

const inputClass =
  "w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3.5 py-3 text-base text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30";

const labelClass = "mb-1.5 block text-sm font-medium text-slate-300";

export default function GetInTouch() {
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? 0 : 30;

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    // TODO: send `data` to your API route / email service here
    console.log(Object.fromEntries(data));
  }

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative overflow-hidden bg-[#050a12] px-5 py-16 text-white sm:px-8 sm:py-20 lg:px-12 lg:py-24"
    >
      {/* Background glow (decorative) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[110px]"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* ---------- Left side ---------- */}
          <motion.div
            initial={{ opacity: 0, x: -offset }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: reduceMotion ? 0 : 0.6 }}
          >
            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/5 px-3 py-1.5 text-xs text-blue-300 sm:text-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Open to work and freelance projects
            </div>

            {/* Heading */}
            <h2
              id="contact-heading"
              className="text-4xl font-bold leading-tight sm:text-5xl"
            >
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              Have a project in mind, a job opening, or just want to say hello?
              Send me a message and I&apos;ll reply as soon as I can.
            </p>

            {/* Contact details */}
            <ul className="mt-8 space-y-5">
              {CONTACTS.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                    <Icon className="h-5 w-5 text-blue-400" aria-hidden="true" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-slate-400">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block break-words text-base text-slate-200 transition-colors hover:text-blue-400 sm:text-lg"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="mt-0.5 max-w-md break-words text-base leading-snug text-slate-200 sm:text-lg">
                        {value}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            {/* Socials */}
            <div className="mt-8 border-t border-slate-800 pt-6">
              <h3 className="text-base font-semibold">Find me online</h3>

              <ul className="mt-3 flex gap-3">
                {SOCIALS.map(({ icon: Icon, label, href }) => (
                  <li key={label}>
                    <motion.a
                      href={href}
                      aria-label={label}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      whileHover={reduceMotion ? undefined : { y: -3 }}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 transition-colors hover:border-blue-500/50 hover:text-blue-400"
                    >
                      <Icon size={18} aria-hidden="true" />
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signature */}
            <p className="mt-8 origin-left -rotate-3 font-serif text-xl italic leading-snug text-blue-400 sm:text-2xl">
              Let&apos;s build
              <br />
              something great!
            </p>
          </motion.div>

          {/* ---------- Right side: form ---------- */}
          <motion.div
            initial={{ opacity: 0, x: offset }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: reduceMotion ? 0 : 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-700/70 bg-slate-950/60 p-5 shadow-2xl backdrop-blur-xl sm:p-8"
          >
            <h3 className="text-2xl font-bold">Send a message</h3>

            <p className="mt-2 text-sm text-slate-400 sm:text-base">
              Fill in the form and I&apos;ll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name + Email */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className={labelClass}>
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className={labelClass}>
                  Subject *
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is this about?"
                  className={inputClass}
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className={labelClass}>
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project or opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={reduceMotion ? undefined : { scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
              >
                <Send size={18} aria-hidden="true" />
                Send message
              </motion.button>

              {/* Privacy note */}
              <p className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-500">
                <ShieldCheck size={14} aria-hidden="true" />
                Your details are only used to reply to you.
              </p>
            </form>
          </motion.div>
        </div>

        {/* ---------- Footer ---------- */}
        <footer className="mt-14 border-t border-slate-800 pt-6 sm:mt-16">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
                SP
              </span>
              <span className="text-sm font-semibold">Suraj Parmar</span>
            </div>

            <p className="order-last w-full text-center text-xs text-slate-500 sm:order-none sm:w-auto sm:text-sm">
              Full Stack Developer · Always learning
            </p>

            <button
              type="button"
              aria-label="Back to top"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: reduceMotion ? "auto" : "smooth",
                })
              }
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <ArrowUp size={16} aria-hidden="true" />
            </button>
          </div>

          <p className="mt-5 border-t border-slate-800 pt-4 text-center text-xs text-slate-600">
            © {new Date().getFullYear()} Suraj Parmar. All rights reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

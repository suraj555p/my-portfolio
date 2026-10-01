
"use client";

import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ShieldCheck,
  ArrowUp,
} from "lucide-react";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function GetInTouch() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050a12] px-5 py-10 text-white sm:px-6 sm:py-12 lg:h-screen lg:min-h-0 lg:py-8 ">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-blue-600/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-600/10 blur-[110px]" />

      <div className="relative mx-auto flex h-full max-w-7xl flex-col">
        {/* Main Content */}
        <div className="grid flex-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Badge */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/5 px-3 py-1.5 text-xs text-blue-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
              Let&apos;s Work Together
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Get in{" "}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="mt-4 max-w-xl text-xl leading-6 text-slate-400 sm:text-xl">
              Have a project in mind, a job opportunity, or just want to say
              hello? I&apos;d love to hear from you. Feel free to reach out,
              and I&apos;ll get back to you as soon as possible.
            </p>

            {/* Contact Details */}
            <div className="mt-6 space-y-4">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                  <Mail className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-xl text-slate-400">Email</p>
                  <p className="mt-0.5 text-xl text-slate-200">
                    suraj87parmar@gmail.com
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                  <Phone className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-xl text-slate-400">Phone</p>
                  <p className="mt-0.5 text-xl text-slate-200">
                    +91 62657 81890
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/10">
                  <MapPin className="h-5 w-5 text-blue-400" />
                </div>

                <div>
                  <p className="text-xl text-slate-400">Location</p>
                  <p className="mt-0.5 max-w-md text-xl leading-5 text-slate-200">
                    AB Road, ShagunCity, Manpur Dist. Indore, Madhya Pradesh,
                    India
                  </p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="mt-6 border-t border-slate-800 pt-5">
              <h3 className="text-base font-semibold">Follow Me</h3>

              <p className="mt-0.5 text-xl text-slate-500">
                Let&apos;s connect on social media
              </p>

              <div className="mt-3 flex gap-2.5">
                {[
                  { icon: FaGithub, href: "#" },
                  { icon: FaLinkedin, href: "#" },
                  { icon: FaInstagram, href: "#" },
                  { icon: FaYoutube, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900/70 text-slate-300 transition-colors hover:border-blue-500/50 hover:text-blue-400"
                  >
                    <Icon size={16} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div className="mt-5">
              <p className="rotate-[-4deg] font-serif text-xl italic text-blue-400">
                Let&apos;s Build
                <br />
                Something Great!
              </p>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-700/70 bg-slate-950/60 p-5 shadow-2xl backdrop-blur-xl sm:p-7"
          >
            <h2 className="text-2xl font-bold">Send a Message</h2>

            <p className="mt-2 text-sm text-slate-400">
              Fill out the form below and I&apos;ll get back to you as soon as
              possible.
            </p>

            <form className="mt-5 space-y-3.5">
              {/* Name + Email */}
              <div className="grid gap-3.5 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xl text-slate-300">
                    Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3.5 py-3 text-xl text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-1.5 block text-xl text-slate-300">
                    Email *
                  </label>

                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3.5 py-3 text-xl text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-1.5 block text-xl text-slate-300">
                  Subject *
                </label>

                <input
                  type="text"
                  placeholder="What is this regarding?"
                  className="w-full rounded-lg border border-slate-700 bg-slate-900/60 px-3.5 py-3 text-xl text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="mb-1.5 block text-xl text-slate-300">
                  Message *
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell me about your project, opportunity or just say hello..."
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-900/60 px-3.5 py-3 text-xl text-white outline-none transition placeholder:text-slate-600 focus:border-blue-500"
                />
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition hover:shadow-blue-500/30"
              >
                <Send size={17} />
                Send Message
              </motion.button>

              {/* Security */}
              <div className="flex items-center justify-center gap-2 pt-1 text-xs text-slate-500">
                <ShieldCheck size={14} />
                Your information is safe with me.
              </div>
            </form>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="mt-6 border-t border-slate-800 pt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
                SP
              </span>

              <span className="text-sm font-semibold">Suraj Parmar</span>
            </div>

            <div className="hidden text-center text-xs text-slate-500 sm:block">
              Full Stack Developer
              <span className="mx-2">•</span>
              Always Learning
            </div>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-400 transition hover:border-blue-500 hover:text-blue-400"
            >
              <ArrowUp size={15} />
            </button>
          </div>

          <div className="mt-3 border-t border-slate-800 pt-3 text-center text-xs text-slate-600">
            © 2026 Suraj Parmar. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}


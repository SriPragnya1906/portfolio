"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState, useEffect } from "react";

const NAV = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY + window.innerHeight / 3;
      for (const link of NAV) {
        const el = document.getElementById(link.name.toLowerCase());
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          const absTop = top + window.scrollY;
          const absBottom = bottom + window.scrollY;
          if (y >= absTop && y <= absBottom) {
            setActive(link.name.toLowerCase());
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={`mx-auto max-w-5xl mx-4 mt-4 rounded-2xl transition-all duration-500 ${
        scrolled ? "glass shadow-[0_8px_40px_rgba(0,0,0,0.5)]" : "bg-transparent"
      }`}>
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center transition-shadow duration-300 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)]">
              <span className="text-white text-xs font-bold font-mono">SP</span>
            </div>
            <span className="font-heading text-lg font-semibold tracking-tight text-white">
              Sri<span className="text-gray-500">Pragnya</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0.5">
            {NAV.map((link) => {
              const isActive = active === link.name.toLowerCase();
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 rounded-lg bg-accent text-white text-sm font-medium transition-all duration-200 hover:bg-accent-light hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
            >
              Let's Talk
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-8 h-8 flex flex-col gap-1.5 items-center justify-center"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <motion.span animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }} className="w-5 h-[1.5px] bg-white rounded-full block" />
            <motion.span animate={{ opacity: mobileOpen ? 0 : 1 }} className="w-5 h-[1.5px] bg-white rounded-full block" />
            <motion.span animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }} className="w-5 h-[1.5px] bg-white rounded-full block" />
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden mx-4"
      >
        <div className="glass rounded-2xl mt-2 p-4 flex flex-col gap-1">
          {NAV.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                active === link.name.toLowerCase()
                  ? "text-accent bg-accent/10"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMobileOpen(false)}
            className="mt-2 px-4 py-3 rounded-lg bg-accent text-white text-sm font-medium text-center">
            Let's Talk
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}

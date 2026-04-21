"use client";

import { motion } from "framer-motion";

export default function OrbitalBadge() {
  const text = "3+ YEARS OF EXCELLENCE • ";
  const characters = text.split("");

  return (
    <div className="relative w-32 h-32 flex items-center justify-center hidden lg:flex">
      <motion.div
        className="absolute inset-0 rounded-full border border-gold/30"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      >
        {characters.map((char, i) => (
          <span
            key={i}
            className="absolute top-0 left-1/2 -translate-x-1/2 origin-[0_64px] text-[10px] font-mono text-gold font-semibold"
            style={{ transform: `translateX(-50%) rotate(${i * (360 / characters.length)}deg)` }}
          >
            {char}
          </span>
        ))}
      </motion.div>
      <div className="w-16 h-16 rounded-full bg-surface border border-cyan/30 flex items-center justify-center flex-col z-10 shadow-[0_0_15px_rgba(0,212,255,0.15)]">
        <span className="text-xl font-heading text-cyan">3+</span>
        <span className="text-[10px] uppercase text-text-muted">YRS</span>
      </div>
    </div>
  );
}

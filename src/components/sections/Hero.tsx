"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { ArrowDown, Mail } from "lucide-react";
import { ShinyText } from "@/components/lightswind/shiny-text";
import { MagneticButton } from "@/components/lightswind/magnetic-button";

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), { stiffness: 60, damping: 20 });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[100dvh] flex items-center overflow-hidden">
      {/* Ambient orbs — ONLY indigo */}
      <div className="mesh-orb w-[800px] h-[800px] bg-[rgba(99,102,241,0.06)] -top-[300px] -right-[200px]" style={{ animationDelay: "0s" }} />
      <div className="mesh-orb w-[500px] h-[500px] bg-[rgba(99,102,241,0.04)] bottom-[-200px] -left-[200px]" style={{ animationDelay: "12s" }} />

      {/* Spotlight */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 55% 45% at 50% 35%, rgba(99,102,241,0.05) 0%, transparent 70%)",
      }} />

      <motion.div
        className="container mx-auto px-6 md:px-12 lg:px-20 pt-28 relative z-10"
        style={{ y: y1, opacity, scale }}
      >
        <motion.div className="max-w-4xl" variants={stagger} initial="hidden" animate="visible">
          {/* Status */}
          <motion.div variants={fadeUp} className="mb-10">
            <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full glass-card text-sm text-[#a1a1aa]">
              <span className="w-2 h-2 rounded-full bg-green-400" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
              Available for opportunities
            </span>
          </motion.div>

          {/* Hero heading */}
          <motion.h1 variants={fadeUp} className="font-heading text-[clamp(3.5rem,8vw,7.5rem)] font-bold leading-[0.9] tracking-tight mb-8">
            <span className="block text-[#fafafa]">I craft</span>
            <ShinyText
              size="4xl"
              weight="bold"
              speed={4}
              baseColor="#6366f1"
              shineColor="#818cf8"
              intensity={1}
              className="font-heading text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.9] block"
            >
              intelligent
            </ShinyText>
            <span className="block text-[#fafafa]">experiences.</span>
          </motion.h1>

          {/* Sub text */}
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-[#a1a1aa] max-w-xl leading-relaxed mb-14">
            <span className="text-[#fafafa] font-medium">B. S. Sri Pragnya</span> — Frontend Developer & AI Engineer. Building at the intersection of design engineering and machine intelligence.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 items-start">
            <MagneticButton
              variant="primary"
              size="lg"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-[#6366f1] text-[#fafafa] hover:bg-[#818cf8] shadow-[0_0_30px_rgba(99,102,241,0.3)]"
            >
              View Work <ArrowDown size={16} />
            </MagneticButton>

            <MagneticButton
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-[#3f3f46] text-[#a1a1aa] hover:border-[#6366f1] hover:text-[#fafafa]"
            >
              <Mail size={16} /> Say Hello
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="w-5 h-9 rounded-full border border-[#3f3f46] flex items-start justify-center p-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-[#6366f1]"
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
        <span className="text-[9px] font-mono text-[#3f3f46] tracking-[0.3em] uppercase">Scroll</span>
      </motion.div>
    </section>
  );
}

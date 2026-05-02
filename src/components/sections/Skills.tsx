"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { BorderBeam } from "@/components/lightswind/border-beam";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/lightswind/3d-scroll-trigger";

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: d } },
});

export default function Skills() {
  const allTags = skillCategories.flatMap((c) => c.tags);

  return (
    <section id="skills" className="py-28 md:py-40 relative overflow-hidden">
      <div className="mesh-orb w-[350px] h-[350px] bg-[rgba(99,102,241,0.03)] bottom-[-50px] left-[-80px]" style={{ animationDelay: "8s" }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div className="mb-20" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="font-mono text-xs text-[#6366f1] tracking-[0.3em] uppercase block mb-4">02 — Skills</span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-[#fafafa]">
            Technical <span className="text-gradient">arsenal</span>.
          </h2>
        </motion.div>

        {/* Skill category cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              variants={fadeUp(0.1 + i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative rounded-2xl overflow-hidden cursor-default transition-all duration-500 hover:shadow-[0_0_50px_rgba(99,102,241,0.1)]"
              style={{
                background: "linear-gradient(145deg, rgba(99,102,241,0.05), rgba(5,5,7,0.95))",
                border: "1px solid rgba(99,102,241,0.08)",
              }}
            >
              <BorderBeam
                colorFrom="#6366f1"
                colorTo="#818cf8"
                size={50}
                duration={3 + i}
                delay={i}
              />

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-[rgba(99,102,241,0.05)] to-transparent" />

              <div className="relative z-10 p-8">
                <div className="flex items-baseline gap-3 mb-7">
                  <span className="font-mono text-[11px] text-[rgba(99,102,241,0.5)] tracking-wider">0{i + 1}</span>
                  <h3 className="font-heading text-2xl font-bold text-[#fafafa]">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.tags.map((tag, j) => (
                    <motion.span
                      key={j}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.03, duration: 0.3 }}
                      className="text-xs font-mono px-3 py-1.5 rounded-md border border-[#27272a] text-[#a1a1aa] hover:text-[#6366f1] hover:border-[rgba(99,102,241,0.3)] transition-all duration-200 cursor-default"
                    >
                      {tag.name}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Scroll-velocity Marquee */}
        <div className="mt-16">
          <ThreeDScrollTriggerContainer className="py-4 rounded-xl overflow-hidden" style={{
            border: "1px solid rgba(99,102,241,0.06)",
            background: "rgba(5,5,7,0.5)",
          }}>
            <ThreeDScrollTriggerRow baseVelocity={3} direction={1}>
              {allTags.map((tag, i) => (
                <span
                  key={i}
                  className="flex-shrink-0 font-mono text-[11px] text-[#71717a] px-4 py-2 rounded-full border border-[rgba(39,39,42,0.5)] mx-2 hover:text-[#6366f1] hover:border-[rgba(99,102,241,0.2)] transition-colors duration-200 whitespace-nowrap"
                >
                  {tag.name}
                </span>
              ))}
            </ThreeDScrollTriggerRow>
          </ThreeDScrollTriggerContainer>
        </div>
      </div>
    </section>
  );
}

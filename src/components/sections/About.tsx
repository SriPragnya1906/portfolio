"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_STATS } from "@/lib/constants";
import { CountUp } from "@/components/lightswind/count-up";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";
import { BorderBeam } from "@/components/lightswind/border-beam";

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: d } },
});

function parseStatValue(val: string): { num: number; suffix: string } {
  const match = val.match(/^(\d+)(.*)$/);
  return match ? { num: parseInt(match[1]), suffix: match[2] } : { num: 0, suffix: val };
}

export default function About() {
  return (
    <section id="about" className="py-28 md:py-40 relative overflow-hidden">
      <div className="mesh-orb w-[400px] h-[400px] bg-[rgba(99,102,241,0.04)] top-[10%] right-[-100px]" style={{ animationDelay: "5s" }} />

      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Section label */}
        <motion.div className="mb-6" variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <span className="font-mono text-xs text-[#6366f1] tracking-[0.3em] uppercase block mb-4">01 — About</span>
        </motion.div>

        {/* ScrollReveal heading */}
        <div className="mb-20">
          <ScrollReveal
            size="2xl"
            enableBlur
            blurStrength={6}
            baseOpacity={0.15}
            textClassName="font-heading font-bold text-[#fafafa] leading-[0.95]"
          >
            Driven by curiosity, built with precision.
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Text */}
          <motion.div className="lg:col-span-7 space-y-6" variants={fadeUp(0.15)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              I'm <span className="text-[#fafafa] font-medium">B. S. Sri Pragnya</span>, a developer who believes the best digital products are invisible — they just <em className="text-[#818cf8] not-italic font-medium">work</em>. I design and engineer interfaces that feel natural, performant, and alive.
            </p>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              My craft spans the full stack: from pixel-perfect React UIs to Python-based AI systems powered by LangChain and multi-model RAG pipelines. I obsess over the details that turn good software into exceptional experiences.
            </p>
            <p className="text-lg text-[#a1a1aa] leading-relaxed">
              Currently exploring the frontier of <span className="text-[#fafafa] font-medium">AI-augmented development</span> — where intelligent agents and beautiful interfaces converge.
            </p>

            {/* Tech strip */}
            <div className="flex flex-wrap gap-2 pt-4">
              {["React", "TypeScript", "Python", "LangChain", "FastAPI", "Tailwind CSS", "PostgreSQL", "LangGraph"].map((t) => (
                <span key={t} className="font-mono text-[11px] px-3 py-1.5 rounded-md border border-[#27272a] text-[#71717a] hover:text-[#6366f1] hover:border-[rgba(99,102,241,0.3)] transition-colors duration-200">{t}</span>
              ))}
            </div>
          </motion.div>

          {/* Stats with CountUp + BorderBeam */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {PORTFOLIO_STATS.map((stat, i) => {
              const { num, suffix } = parseStatValue(stat.value);
              return (
                <motion.div
                  key={i}
                  variants={fadeUp(0.2 + i * 0.08)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative group rounded-2xl p-7 overflow-hidden cursor-default"
                  style={{
                    background: "linear-gradient(145deg, rgba(99,102,241,0.06), rgba(5,5,7,0.9))",
                    border: "1px solid rgba(99,102,241,0.1)",
                  }}
                >
                  <BorderBeam
                    colorFrom="#6366f1"
                    colorTo="#818cf8"
                    size={60}
                    duration={4 + i}
                    delay={i * 0.5}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[rgba(99,102,241,0.06)] to-transparent" />
                  <div className="relative z-10">
                    <div className="font-heading text-5xl font-bold text-[#fafafa] mb-1">
                      <CountUp
                        value={num}
                        suffix={suffix}
                        duration={2.5}
                        animationStyle="spring"
                        className="text-5xl font-heading font-bold text-[#fafafa]"
                        numberClassName="text-[#fafafa]"
                      />
                    </div>
                    <div className="font-mono text-[10px] text-[#71717a] tracking-wider uppercase">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

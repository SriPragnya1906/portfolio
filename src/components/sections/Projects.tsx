"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { CheckCircle2, Sparkles, Cpu, GitBranch, Layers, Eye, Box } from "lucide-react";
import { projects, Project } from "@/data/projects";
import { BorderBeam } from "@/components/lightswind/border-beam";

const fadeUp = (d = 0) => ({
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: d } },
});

/* ═══════════════════════════════════════
   FEATURED CARD — AI Research Assistant
═══════════════════════════════════════ */
function FeaturedCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const r = cardRef.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
    cardRef.current.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -6}deg`);
    cardRef.current.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 6}deg`);
  };
  const onLeave = () => {
    setHovered(false);
    cardRef.current?.style.setProperty("--rx", "0deg");
    cardRef.current?.style.setProperty("--ry", "0deg");
  };

  return (
    <motion.div variants={fadeUp(0)} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <div
        ref={cardRef}
        className="relative rounded-3xl overflow-hidden transform-gpu group"
        style={{
          transform: "perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transformStyle: "preserve-3d",
          background: "linear-gradient(145deg, rgba(99,102,241,0.06), rgba(5,5,7,0.98))",
          border: "1px solid rgba(99,102,241,0.12)",
          transition: "transform 0.1s ease-out",
        }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
      >
        <BorderBeam colorFrom="#6366f1" colorTo="#818cf8" size={80} duration={5} />

        {/* Cursor radial glow */}
        <div className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.07), transparent 55%)` }} />

        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          <div className="lg:col-span-3 flex flex-col gap-6" style={{ transform: "translateZ(25px)" }}>
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[rgba(99,102,241,0.3)] bg-[rgba(99,102,241,0.1)] text-[#6366f1] font-mono text-xs">
                <Sparkles size={11} /> Featured
              </span>
              {project.status && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] text-[#22c55e] font-mono text-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} /> {project.status}
                </span>
              )}
              {project.category && <span className="font-mono text-[10px] text-[#71717a] tracking-widest uppercase">{project.category}</span>}
            </div>

            {/* Title */}
            <div>
              <h3 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-2 text-[#fafafa]">{project.title}</h3>
              {project.subtitle && <p className="font-mono text-sm text-[#818cf8]">{project.subtitle}</p>}
            </div>

            <p className="text-[#a1a1aa] text-base md:text-lg leading-relaxed">{project.longDescription ?? project.description}</p>

            {/* Highlights */}
            {project.highlights && (
              <ul className="flex flex-col gap-2.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                    <CheckCircle2 size={14} className="text-[#6366f1] mt-0.5 shrink-0" /> {h}
                  </li>
                ))}
              </ul>
            )}

            {/* Tech tags inline */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-[11px] font-mono px-3 py-1 rounded-md bg-[rgba(99,102,241,0.06)] text-[#818cf8] border border-[rgba(99,102,241,0.12)] hover:bg-[rgba(99,102,241,0.12)] transition-colors duration-200">{tag}</span>
              ))}
            </div>
          </div>

          {/* Right sidebar — Architecture + Critic Scores */}
          <div className="lg:col-span-2 flex flex-col gap-4" style={{ transform: "translateZ(15px)" }}>
            {/* Architecture diagram */}
            <div className="rounded-2xl border border-[rgba(39,39,42,0.6)] bg-[rgba(5,5,7,0.6)] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Cpu size={12} className="text-[#6366f1]" />
                <span className="font-mono text-[10px] text-[#71717a] tracking-widest uppercase">Architecture</span>
              </div>
              {[
                { label: "Frontend", items: ["React", "Tailwind CSS"], icon: <Layers size={10} /> },
                { label: "Backend", items: ["Python", "Flask"], icon: <GitBranch size={10} /> },
                { label: "AI Layer", items: ["LangChain", "LangGraph", "RAG"], icon: <Cpu size={10} /> },
              ].map((layer) => (
                <div key={layer.label} className="mb-3 last:mb-0">
                  <div className="flex items-center gap-1.5 mb-1.5 text-[#6366f1]">
                    {layer.icon}
                    <span className="font-mono text-[9px] tracking-widest uppercase">{layer.label}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pl-3 border-l border-[#27272a]">
                    {layer.items.map(item => (
                      <span key={item} className="text-[11px] px-2 py-0.5 rounded font-mono bg-[rgba(99,102,241,0.08)] text-[#818cf8] border border-[rgba(99,102,241,0.15)]">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Critic scores */}
            <div className="rounded-2xl border border-[rgba(39,39,42,0.6)] bg-[rgba(5,5,7,0.6)] p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles size={12} className="text-[#6366f1]" />
                <span className="font-mono text-[10px] text-[#71717a] tracking-widest uppercase">AI Critic Scores</span>
              </div>
              {[
                { label: "Idea Viability", score: 87 },
                { label: "Research Depth", score: 92 },
                { label: "Novelty Index", score: 78 },
              ].map(({ label, score }) => (
                <div key={label} className="mb-3 last:mb-0">
                  <div className="flex justify-between mb-1">
                    <span className="font-mono text-[10px] text-[#71717a]">{label}</span>
                    <span className="font-mono text-[10px] text-[#a1a1aa]">{score}%</span>
                  </div>
                  <div className="h-1 rounded-full bg-[#27272a] overflow-hidden">
                    <motion.div className="h-full rounded-full bg-[#6366f1]" initial={{ width: 0 }} whileInView={{ width: `${score}%` }} viewport={{ once: true }} transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.5 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   STANDARD CARD — No "View Project" link
═══════════════════════════════════════ */
function StandardCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const onMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMouse({ x: e.clientX - r.left, y: e.clientY - r.top });
    ref.current.style.setProperty("--rx", `${((e.clientY - r.top) / r.height - 0.5) * -10}deg`);
    ref.current.style.setProperty("--ry", `${((e.clientX - r.left) / r.width - 0.5) * 10}deg`);
  };
  const onLeave = () => {
    setHovered(false);
    ref.current?.style.setProperty("--rx", "0deg");
    ref.current?.style.setProperty("--ry", "0deg");
  };

  // Icon per category
  const categoryIcon = project.category?.includes("3D") ? <Box size={14} className="text-[#6366f1]" /> :
    project.category?.includes("AI") ? <Cpu size={14} className="text-[#6366f1]" /> :
    <Layers size={14} className="text-[#6366f1]" />;

  return (
    <motion.div variants={fadeUp(index * 0.1)} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}>
      <div ref={ref} className="relative rounded-2xl overflow-hidden min-h-[320px] p-7 flex flex-col justify-between transform-gpu group"
        style={{
          transform: "perspective(900px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
          transformStyle: "preserve-3d",
          background: "linear-gradient(145deg, rgba(99,102,241,0.04), rgba(5,5,7,0.95))",
          border: "1px solid rgba(99,102,241,0.08)",
          transition: "transform 0.1s ease-out, box-shadow 0.4s ease",
        }}
        onMouseMove={onMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={onLeave}
      >
        <BorderBeam colorFrom="#6366f1" colorTo="#818cf8" size={40} duration={4 + index} delay={index * 0.5} />

        {/* Cursor glow */}
        <div className="pointer-events-none absolute inset-0 transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0, background: `radial-gradient(300px circle at ${mouse.x}px ${mouse.y}px, rgba(99,102,241,0.06), transparent 55%)` }} />

        <div style={{ transform: "translateZ(18px)" }}>
          {/* Header: ghost number + category */}
          <div className="flex items-start justify-between mb-5">
            <div className="flex items-center gap-3">
              <span className="font-heading text-5xl font-bold leading-none select-none opacity-[0.05] text-[#fafafa]">{project.id}</span>
              <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-[rgba(99,102,241,0.08)] border border-[rgba(99,102,241,0.15)]">
                {categoryIcon}
              </div>
            </div>
            <div className="flex items-center gap-2">
              {project.status && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(34,197,94,0.08)] border border-[rgba(34,197,94,0.2)] text-[#22c55e] font-mono text-[10px]">
                  <span className="w-1 h-1 rounded-full bg-[#22c55e]" style={{ animation: "pulse-dot 2s ease-in-out infinite" }} />
                  {project.status}
                </span>
              )}
              {project.category && <span className="font-mono text-[9px] tracking-widest uppercase px-2 py-1 rounded-md border border-[#27272a] text-[#71717a]">{project.category}</span>}
            </div>
          </div>

          <h3 className="font-heading text-2xl font-bold mb-2 text-[#fafafa] group-hover:text-[#818cf8] transition-colors duration-300">{project.title}</h3>
          {project.subtitle && <p className="font-mono text-xs text-[#6366f1] mb-3">{project.subtitle}</p>}
          <p className="text-[#71717a] text-sm leading-relaxed line-clamp-3">{project.description}</p>
        </div>

        {/* Tags — no "View Project" link */}
        <div style={{ transform: "translateZ(25px)" }} className="mt-6">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map(tag => (
              <span key={tag} className="text-[11px] font-mono px-2.5 py-1 rounded-md border border-[#27272a] text-[#71717a] hover:text-[#818cf8] hover:border-[rgba(99,102,241,0.2)] transition-all duration-200">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ═══════════════════════════════════════
   MAIN — Projects Section
═══════════════════════════════════════ */
export default function Projects() {
  const featured = projects.find(p => p.featured);
  const rest = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-28 md:py-40 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div className="mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <span className="font-mono text-xs text-[#6366f1] tracking-[0.3em] uppercase block mb-4">03 — Work</span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] text-[#fafafa]">
            Selected <span className="text-gradient">works</span>.
          </h2>
        </motion.div>

        {featured && <div className="relative mb-12"><FeaturedCard project={featured} /></div>}

        {/* Divider */}
        <motion.div className="flex items-center gap-4 my-14" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.15))" }} />
          <span className="font-mono text-[10px] text-[#3f3f46] tracking-widest uppercase px-4 py-2 rounded-full border border-[#27272a]">More Projects</span>
          <div className="h-[1px] flex-1" style={{ background: "linear-gradient(90deg, rgba(99,102,241,0.15), transparent)" }} />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p, i) => <StandardCard key={p.id} project={p} index={i} />)}
        </div>
      </div>
    </section>
  );
}

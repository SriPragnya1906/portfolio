"use client";

import { useRef } from "react";
import SectionWrapper from "../SectionWrapper";
import { projects } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 relative overflow-hidden flex-row-reverse">
          <h2 className="font-heading text-4xl md:text-5xl font-bold flex-shrink-0">
            Selected <span className="text-gold">Works</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-l from-gold/30 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function ProjectCard({ project }: { project: any }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Tilt calculations
    const rotateX = ((y / rect.height) - 0.5) * -15; 
    const rotateY = ((x / rect.width) - 0.5) * 15;

    cardRef.current.style.setProperty("--mx", `${x}px`);
    cardRef.current.style.setProperty("--my", `${y}px`);
    cardRef.current.style.setProperty("--rx", `${rotateX}deg`);
    cardRef.current.style.setProperty("--ry", `${rotateY}deg`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--rx", `0deg`);
    cardRef.current.style.setProperty("--ry", `0deg`);
  };

  return (
    <div 
      ref={cardRef}
      className="glass-card relative overflow-hidden rounded-lg min-h-[340px] p-8 flex flex-col justify-end group transition-all duration-300 transform-gpu"
      style={{
        transform: "perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
           style={{
             background: "radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), rgba(201,168,76,0.1), transparent 40%)"
           }}
      />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 w-full h-[2px] opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-r from-gold to-cyan"></div>
      
      {/* Huge faded number */}
      <div className="absolute top-4 left-4 font-heading text-8xl md:text-[8rem] font-bold text-gold opacity-10 pointer-events-none leading-none select-none" style={{ transform: "translateZ(30px)" }}>
        {project.id}
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(50px)" }}>
        <h3 className="font-heading text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-text-muted mb-6 line-clamp-3">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-cyan/10 text-cyan">
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="inline-flex items-center gap-2 text-gold font-medium group/link">
          View Case Study <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
}

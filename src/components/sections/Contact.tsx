"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { Mail, Terminal, Briefcase, Send } from "lucide-react";
import { COMMON_LINKS } from "@/lib/constants";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="py-32">
      <div className="container mx-auto px-6 md:px-12 flex flex-col items-center text-center max-w-[680px]">
        <div className="inline-block px-4 py-1.5 rounded-full border border-gold/30 bg-gold/5 text-gold font-mono text-sm mb-8">
          {"//"} Next Steps
        </div>
        
        <h2 className="font-heading text-5xl md:text-6xl font-bold mb-6">
          Let's Work <span className="text-cyan">Together</span>
        </h2>
        
        <p className="text-lg text-text-muted mb-12 leading-relaxed">
          I am currently evaluating opportunities and would love to bring my expertise in modern web technologies to <span className="text-gold font-medium">Afford Medical Technologies Private Limited</span>. My inbox is always open.
        </p>
        
        <a 
          href={COMMON_LINKS.email}
          className="bg-gold hover:bg-gold-hover text-[#050810] font-semibold px-10 py-5 rounded-sm flex items-center justify-center gap-3 transition-all hover:scale-105 mb-16 text-lg w-full sm:w-auto"
        >
          Send a Message <Send size={20} />
        </a>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <a 
            href={COMMON_LINKS.email}
            className="glass-card px-6 py-4 rounded-lg flex items-center justify-center gap-3 hover:-translate-y-1 hover:border-gold transition-all text-text-primary hover:text-gold"
          >
            <Mail size={20} /> Email
          </a>
          <a 
            href={COMMON_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-4 rounded-lg flex items-center justify-center gap-3 hover:-translate-y-1 hover:border-gold transition-all text-text-primary hover:text-gold"
          >
            <Briefcase size={20} /> LinkedIn
          </a>
          <a 
            href={COMMON_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card px-6 py-4 rounded-lg flex items-center justify-center gap-3 hover:-translate-y-1 hover:border-gold transition-all text-text-primary hover:text-gold"
          >
            <Terminal size={20} /> GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}

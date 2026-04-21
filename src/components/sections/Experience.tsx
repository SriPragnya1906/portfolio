"use client";

import { motion } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16 relative overflow-hidden">
          <h2 className="font-heading text-4xl md:text-5xl font-bold flex-shrink-0">
            Professional <span className="text-gold">Journey</span>
          </h2>
          <div className="h-[1px] w-full bg-gradient-to-r from-gold/30 to-transparent"></div>
        </div>

        <div className="max-w-3xl border-l-[2px] border-gold/30 ml-4 md:ml-8 space-y-12 pb-8">
          {experience.map((item, i) => (
            <motion.div 
              key={i}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              {/* Timeline marker */}
              <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-background border-2 border-gold shadow-[0_0_10px_rgba(201,168,76,0.5)]"></div>
              
              <div className="glass-card p-6 rounded-lg group hover:-translate-y-1 transition-transform">
                <span className="font-mono text-cyan text-sm mb-2 block">{item.period}</span>
                <h3 className="font-heading text-2xl font-bold mb-1">{item.role}</h3>
                <h4 className="text-gold mb-4 font-medium">{item.company}</h4>
                <p className="text-text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

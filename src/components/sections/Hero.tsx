"use client";

import { motion, Variants } from "framer-motion";
import OrbitalBadge from "../OrbitalBadge";
import { ArrowRight, Mail } from "lucide-react";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 relative outline-none">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div 
          className="max-w-4xl relative"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex justify-between items-start">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/5 text-cyan font-mono text-sm mb-6">
              {"//"} Frontend Developer · ReactJS · Python · LangChain
            </div>
            <div className="hidden lg:block absolute right-0 top-0 xl:-right-24 xl:-top-12">
               <OrbitalBadge />
            </div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8">
            Building <span className="text-gradient-gold">intelligent</span> frontend experiences
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-text-muted max-w-2xl mb-12 leading-relaxed">
            I develop dynamic, user-centric interfaces and explore advanced AI-driven workflows to bring innovative ideas to life.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="bg-gold hover:bg-gold-hover text-[#050810] font-semibold px-8 py-4 rounded-sm flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              View Projects <ArrowRight size={20} />
            </a>
            <a 
              href="#contact" 
              className="border border-text-muted hover:border-gold hover:text-gold text-white font-medium px-8 py-4 rounded-sm flex items-center justify-center gap-2 transition-all"
            >
              Get In Touch <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-gold to-transparent relative overflow-hidden">
          <motion.div 
            className="absolute top-0 w-full h-1/2 bg-white"
            animate={{ top: ["-50%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <span className="text-xs font-mono text-gold/70 tracking-widest uppercase">Scroll to explore</span>
      </motion.div>
    </section>
  );
}

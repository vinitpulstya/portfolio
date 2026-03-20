"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";

export function AboutSection() {
  return (
    <motion.section 
      id="about" 
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-5xl py-24 md:py-32"
    >
      <div className="mb-12 flex items-center whitespace-nowrap">
        <h2 className="text-4xl md:text-5xl font-black text-foreground flex items-center tracking-tight">
          <span className="mr-4 font-mono text-xl md:text-2xl font-normal text-primary">01.</span>
          About Me
        </h2>
        <div className="ml-8 h-px w-full max-w-xs bg-card-border" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
        
        {/* Main Bio Card (Spans 2 columns) */}
        <motion.div 
          className="glass-panel md:col-span-2 md:row-span-2 rounded-3xl p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="hidden md:block absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[60px] transition-all duration-500 group-hover:bg-primary/20" />
           <p className="text-xl text-secondary leading-relaxed relative z-10">
            {about.description}
          </p>
        </motion.div>

        {/* Profile Image Card */}
        <motion.div 
          className="glass-panel rounded-[1.8rem] p-2 flex items-center justify-center relative overflow-hidden group"
          initial={false}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="absolute inset-0 bg-primary/40 mix-blend-overlay z-10 transition-opacity duration-300 group-hover:opacity-0" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="/images/pic.jpg" 
            alt={about.name} 
            className="w-full h-full object-cover rounded-2xl grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110" 
          />
        </motion.div>

        {/* Skills Card (Spans 3 columns) */}
        <motion.div 
          className="glass-panel md:col-span-3 rounded-3xl p-8 md:p-10"
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-4">
             <span className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary"><Icon name="external" /></span>
             Recent Technologies
          </h3>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {about.skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-3 text-secondary font-mono text-sm p-4 rounded-2xl bg-background/50 border border-card-border/50 hover:border-primary/50 hover:text-primary transition-colors cursor-default hover:-translate-y-1 shadow-sm">
                <span className="text-primary text-lg">▹</span> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

      </div>
    </motion.section>
  );
}

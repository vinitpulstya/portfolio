"use client";

import { about } from "@/lib/portfolio-data";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <motion.section 
      id="about" 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-5xl py-24 md:py-32"
    >
      <div className="mb-12 flex items-center whitespace-nowrap">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
          <span className="mr-4 font-mono text-xl md:text-2xl font-normal text-primary">01.</span>
          About Me
        </h2>
        <div className="ml-8 h-px w-full max-w-xs bg-card-border" />
      </div>

      <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 md:gap-16">
        <div className="lg:col-span-3 text-lg text-secondary leading-relaxed space-y-6">
          <p>
            Hello! My name is {about.name} and {about.description}
          </p>
          <p>
            {about.notableExperiences.length > 0 ? "Fast-forward to today, and I have had the privilege of working at " : ""}
            {about.notableExperiences.map((experience, index) => (
              <a key={experience.name} className="font-medium text-primary hover:text-accent transition-colors duration-300" href={experience.href} rel="noopener noreferrer" target="_blank">
                {experience.displayText}
                {index === about.notableExperiences.length - 1 ? "." : ","}
              </a>
            ))}
            My main focus these days is building accessible, inclusive products and digital experiences at{" "}
            <a className="font-medium text-primary hover:text-accent transition-colors duration-300 relative inline-block after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300" href={about.currentExperience.href} rel="noopener noreferrer" target="_blank">
              {about.currentExperience.name}
            </a>{" "}
            for a variety of clients.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          
          <ul className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
            {about.skills.map((skill, index) => (
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                key={skill} 
                className="flex items-center gap-2 rounded-full border border-card-border bg-card-bg/50 px-4 py-2 text-sm font-mono text-foreground backdrop-blur-sm transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <span className="text-primary text-xs">▹</span>
                {skill}
              </motion.li>
            ))}
          </ul>
        </div>
        
        <div className="lg:col-span-2 relative max-w-[300px] mx-auto w-full group">
          <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
            <div className="absolute inset-0 bg-primary/20 mix-blend-overlay transition-opacity duration-500 group-hover:opacity-0 z-10" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/images/pic.jpg" 
              alt="Headshot" 
              className="w-full h-auto object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
            />
          </div>
          <div className="absolute inset-0 rounded-xl border-2 border-primary translate-x-5 translate-y-5 -z-10 transition-transform duration-500 group-hover:translate-x-3 group-hover:translate-y-3" />
        </div>
      </div>
    </motion.section>
  );
}

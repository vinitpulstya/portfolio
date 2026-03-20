"use client";

import { projects } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <section id="projects" className="mx-auto max-w-6xl py-24 md:py-32">
      <motion.div 
        className="mb-20 flex items-center whitespace-nowrap"
        initial={false}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-black text-foreground flex items-center tracking-tight">
          <span className="mr-4 font-mono text-xl md:text-2xl font-normal text-primary">03.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="ml-8 h-px w-full max-w-xs bg-card-border" />
      </motion.div>

      <div className="flex flex-col gap-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div 
      initial={false}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center ${!isEven ? 'rtl' : ''}`}
    >
      {/* Project Image */}
      <div 
        className={`relative z-10 col-span-1 md:col-span-7 h-[220px] md:h-[350px] w-full rounded-3xl overflow-hidden glass-panel group ${!isEven ? 'md:col-start-6 md:row-start-1' : ''}`}
        style={{ direction: 'ltr' }}
      >
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay transition-all duration-500 group-hover:opacity-0 z-20" />
        <a href={project.externalLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={project.imageSrc} 
            alt={project.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
          />
        </a>
      </div>

      {/* Project Content */}
      <div 
        className={`relative z-20 col-span-1 md:col-span-6 flex flex-col justify-center ${isEven ? 'md:col-start-7 md:-ml-12 text-left md:text-right md:items-end' : 'md:col-start-1 md:-mr-12 text-left md:items-start'} row-start-1`}
        style={{ direction: 'ltr' }}
      >
        <p className="font-mono text-sm text-primary mb-2">Featured Project</p>
        <h3 className="text-3xl md:text-4xl font-black text-foreground mb-6 hover:text-primary transition-colors">
          <a href={project.externalLink} target="_blank" rel="noopener noreferrer">{project.name}</a>
        </h3>
        
        <div className="glass-panel p-6 md:p-8 rounded-2xl shadow-xl w-full">
          <p className="text-lg text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul className={`flex flex-wrap gap-4 font-mono text-sm text-secondary mt-6 ${isEven ? 'md:justify-end' : ''}`}>
          {project.tools.map((tool: string) => (
            <li key={tool} className="rounded-full bg-primary/10 px-4 py-2 text-primary whitespace-nowrap">
              {tool}
            </li>
          ))}
        </ul>

        <div className={`flex items-center gap-4 mt-8 ${isEven ? 'md:justify-end' : ''}`}>
          <a href={project.github} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors hover:-translate-y-1 block p-2">
            <span className="inline-block w-6 h-6 [&_svg]:w-6 [&_svg]:h-6"><Icon name="github" /></span>
          </a>
          <a href={project.externalLink} target="_blank" rel="noreferrer" className="text-secondary hover:text-primary transition-colors hover:-translate-y-1 block p-2">
            <span className="inline-block w-6 h-6 [&_svg]:w-6 [&_svg]:h-6"><Icon name="external" /></span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

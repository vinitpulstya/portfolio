"use client";

import { projects } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";
import { motion } from "framer-motion";

export function ProjectsSection() {
  return (
    <motion.section 
      id="projects"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-5xl py-24 md:py-32"
    >
      <div className="mb-12 flex items-center whitespace-nowrap">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
          <span className="mr-4 font-mono text-xl md:text-2xl font-normal text-primary">03.</span>
          Some Things I&apos;ve Built
        </h2>
        <div className="ml-8 h-px w-full max-w-xs bg-card-border" />
      </div>

      <ul className="m-0 list-none p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.li 
            key={project.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between rounded-xl bg-card-bg border border-card-border shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative h-48 w-full overflow-hidden border-b border-card-border">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-0 z-10" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={project.imageSrc} 
                alt={project.name} 
                className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-grow p-6 z-20 bg-card-bg">
              <div className="flex justify-between items-center mb-4 relative z-30">
                <span className="font-mono text-sm text-primary">Featured Project</span>
                <div className="flex items-center gap-3 text-secondary">
                  <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-1">
                    <span className="inline-block w-5 h-5 [&_svg]:w-5 [&_svg]:h-5"><Icon name="github" /></span>
                  </a>
                  <a href={project.externalLink} target="_blank" rel="noreferrer" className="hover:text-primary transition-colors p-1">
                    <span className="inline-block w-5 h-5 [&_svg]:w-5 [&_svg]:h-5"><Icon name="external" /></span>
                  </a>
                </div>
              </div>

              <h3 className="mb-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                <a href={project.externalLink} rel="noopener noreferrer" target="_blank" className="before:absolute before:inset-0 z-20">
                  {project.name}
                </a>
              </h3>

              <p className="text-secondary text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <ul className="flex flex-wrap gap-2 text-xs font-mono text-secondary mt-auto relative z-30">
                {project.tools.map((tool) => (
                  <li key={tool} className="rounded-full bg-primary/10 px-3 py-1 text-primary">
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}

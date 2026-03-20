"use client";

import { motion } from "framer-motion";
import { workExperience } from "@/lib/portfolio-data";

export function JobsSection() {
  return (
    <motion.section 
      id="jobs"
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-4xl py-24 md:py-32"
    >
      <div className="mb-16 flex items-center whitespace-nowrap">
        <h2 className="text-3xl md:text-5xl font-black text-foreground flex items-center tracking-tight">
          <span className="mr-4 font-mono text-xl md:text-2xl font-normal text-primary">02.</span>
          Where I&apos;ve Worked
        </h2>
        <div className="ml-8 h-px w-full max-w-xs bg-card-border" />
      </div>

      <div className="relative border-l-2 border-card-border/60 ml-4 md:ml-6 flex flex-col gap-12 pl-8 md:pl-12">
        {workExperience.map((job, index) => (
          <motion.div
            key={index}
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative glass-panel rounded-3xl p-8 md:p-10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 overflow-hidden"
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[42px] md:-left-[58px] top-12 h-5 w-5 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_rgba(139,92,246,0.5)] transition-transform duration-300 group-hover:scale-125 z-20" />

            {/* Subtle glow effect on hover */}
            <div className="hidden md:block absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/0 blur-[50px] transition-all duration-500 group-hover:bg-primary/20" />
            
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 relative z-10">
              <h3 className="text-2xl font-bold text-foreground">
                {job.title}{" "}
                <span className="text-primary">
                  @{" "}
                  <a href={job.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {job.name}
                  </a>
                </span>
              </h3>
              <p className="font-mono text-sm text-secondary mt-2 md:mt-0 opacity-70">
                {job.startDate} - {job.endDate}
              </p>
            </div>
            
            <ul className="flex flex-col gap-4 relative z-10">
              {job.noteworthyTasks.map((desc, i) => (
                <li key={i} className="flex items-start text-[clamp(1rem,3vw,1.1rem)] text-secondary leading-relaxed">
                  <span className="text-primary mt-1.5 mr-4 text-xl leading-none">▹</span>
                  <span dangerouslySetInnerHTML={{ __html: desc }} className="[&>a]:text-primary [&>a]:hover:underline" />
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

"use client";

import { useState } from "react";
import { workExperience } from "@/lib/portfolio-data";
import { motion, AnimatePresence } from "framer-motion";

export function JobsSection() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const selectedJob = workExperience[selectedJobIndex];

  return (
    <motion.section 
      id="jobs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="mx-auto max-w-4xl py-24 md:py-32"
    >
      <div className="mb-12 flex items-center whitespace-nowrap">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground flex items-center">
          <span className="mr-4 font-mono text-xl md:text-2xl font-normal text-primary">02.</span>
          Where I&apos;ve Worked
        </h2>
        <div className="ml-8 h-px w-full max-w-xs bg-card-border" />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Tabs List */}
        <div className="relative flex overflow-x-auto md:flex-col md:overflow-visible pb-4 md:pb-0 z-10 w-full md:w-max [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {workExperience.map((job, index) => {
            const isSelected = index === selectedJobIndex;
            return (
              <button
                key={job.name}
                className={`relative flex md:h-12 w-full min-w-max md:min-w-fit items-center border-b-2 md:border-b-0 md:border-l-2 px-6 py-3 md:py-0 text-left font-mono text-sm transition-colors duration-300 hover:bg-card-bg/50 ${
                  isSelected ? "text-primary border-transparent" : "text-secondary border-card-border hover:text-primary"
                }`}
                onClick={() => setSelectedJobIndex(index)}
              >
                {/* Active Tab Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute bottom-[-2px] left-0 h-[2px] w-full bg-primary md:bottom-0 md:left-[-2px] md:h-full md:w-[2px]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {job.acronym || job.name}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        <div className="relative w-full min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedJobIndex}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.2 }}
              className="w-full"
            >
              <h3 className="mb-2 text-2xl font-medium text-foreground">
                <span>{selectedJob.title}</span>
                <span className="text-primary">
                  &nbsp;@&nbsp;
                  <a href={selectedJob.href} rel="noopener noreferrer" target="_blank" className="relative inline-block hover:text-accent transition-colors after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-primary after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:duration-300">
                    {selectedJob.name}
                  </a>
                </span>
              </h3>
              <p className="mb-6 font-mono text-sm text-secondary">
                {selectedJob.startDate} - {selectedJob.endDate}
              </p>
              <ul className="m-0 list-none p-0 space-y-4">
                {selectedJob.noteworthyTasks.map((task, i) => (
                  <motion.li 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    key={i} 
                    className="relative pl-8 text-[1.05rem] md:text-lg text-secondary leading-relaxed before:absolute before:left-0 before:top-1.5 before:text-primary before:content-['▹']"
                  >
                    {task}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}

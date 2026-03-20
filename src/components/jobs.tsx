"use client";

import { useState } from "react";
import { workExperience } from "@/lib/portfolio-data";

export function JobsSection() {
  const [selectedJobIndex, setSelectedJobIndex] = useState(0);
  const selectedJob = workExperience[selectedJobIndex];

  return (
    <section id="jobs">
      <h2 className="numbered-heading">Where I have Worked</h2>
      <div className="flex max-[600px]:flex-col">
        <div className="relative z-3 m-0 w-max list-none p-0 max-[600px]:flex">
          {workExperience.map((job, index) => (
            <button
              key={job.name}
              className={`relative flex h-[4.2rem] w-full items-center border-l-2 bg-transparent px-5 pb-0.5 text-left font-mono text-[1.3rem] whitespace-nowrap text-[#64ffda] transition-all hover:border-l-[#64ffda] hover:bg-[#112240] ${
                job.name === selectedJob.name ? "border-l-[#64ffda]" : "border-l-[#233554]"
              }`}
              onClick={() => setSelectedJobIndex(index)}
            >
              {job.name}
            </button>
          ))}
        </div>
        <div className="relative ml-5 w-full">
          <div className="fadedown-enter-done h-auto w-full px-1.25 py-2.5">
            <h3 className="mb-0.5 text-[2.2rem] leading-[1.3] font-medium">
              <span>{selectedJob.title}</span>
              <span className="text-[#64ffda]">
                &nbsp;@&nbsp;
                <a href={selectedJob.href} rel="noopener noreferrer" target="_blank" className="a-highlighted-underlined">
                  {selectedJob.name}
                </a>
              </span>
            </h3>
            <p className="mb-6.25 font-mono text-[1.3rem] text-[#a8b2d1]">
              {selectedJob.startDate} - {selectedJob.endDate}
            </p>
            <ul className="m-0 list-none p-0 text-[1.6rem]">
              {selectedJob.noteworthyTasks.map((task) => (
                <li key={task} className="relative mb-2.5 pl-7.5 before:absolute before:left-0 before:text-[#64ffda] before:content-['▹']">
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

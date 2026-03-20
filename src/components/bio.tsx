"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { bio } from "@/lib/portfolio-data";

export function BioSection() {
  const [enableTilt, setEnableTilt] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-400, 400], [10, -10]);
  const rotateY = useTransform(x, [-400, 400], [-10, 10]);

  useEffect(() => {
    const shouldEnableTilt = window.matchMedia("(min-width: 769px) and (pointer: fine)").matches;
    setEnableTilt(shouldEnableTilt);

    if (!shouldEnableTilt) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      x.set(e.clientX - centerX);
      y.set(e.clientY - centerY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  return (
    <section 
      id="bio" 
      className="relative flex min-h-screen flex-col items-center justify-center pt-24 text-center overflow-visible"
    >
      <motion.div 
        className="hidden md:block absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 mix-blend-screen blur-[120px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="hidden md:block absolute right-1/4 bottom-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 mix-blend-screen blur-[120px]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <motion.div
        initial={false}
        style={enableTilt ? { rotateX, rotateY } : undefined}
        className="z-10 flex flex-col items-center relative"
      >
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 rounded-full border border-primary/30 bg-primary/10 px-6 py-2 font-mono text-sm font-semibold text-primary backdrop-blur-md shadow-lg shadow-primary/20"
          >
            {bio.greet}
          </motion.div>
          
          <motion.h1
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-[clamp(4rem,10vw,10rem)] font-black leading-none tracking-tighter text-foreground drop-shadow-2xl"
          >
            {bio.name}.
          </motion.h1>
          
          <motion.h2
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-8 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-none tracking-tight text-secondary"
          >
            {bio.oneliner}
          </motion.h2>

          <motion.p
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-[clamp(1.2rem,3vw,1.4rem)] text-secondary leading-relaxed mb-12 px-4"
          >
            {bio.description} 
            {bio.currentOrg && (
              <span> {bio.currentOrg.onelinerJD} at <a href={bio.currentOrg.webpage} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">{bio.currentOrg.name}</a>.</span>
            )}
          </motion.p>
          
          <motion.div
            initial={false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a
              href="#jobs"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-primary px-10 py-5 font-bold text-white transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
            >
              <span className="relative z-10 text-lg">Check out my jobs!</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-full bg-white/20 transition-transform duration-300 group-hover:scale-100" />
            </a>
          </motion.div>
      </motion.div>
    </section>
  );
}

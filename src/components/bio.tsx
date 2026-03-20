"use client";

import { bio } from "@/lib/portfolio-data";
import { motion, Variants } from "framer-motion";

export function BioSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.section 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex min-h-screen flex-col items-start justify-center pt-24 md:pt-40"
    >
      <motion.div variants={itemVariants}>
        <h1 className="mb-4 ml-1 text-sm md:text-lg font-mono text-primary font-medium tracking-wide">
          {bio.greet}
        </h1>
      </motion.div>
      <motion.div variants={itemVariants}>
        <h2 className="m-0 text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-foreground">
          {bio.name}.
        </h2>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-2">
        <h3 className="m-0 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-secondary bg-clip-text text-transparent bg-gradient-to-r from-secondary to-accent">
          {bio.oneliner}
        </h3>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-6 max-w-2xl">
        <p className="text-lg md:text-xl text-secondary leading-relaxed">
          {bio.description}{" "}
          {bio.currentOrg ? (
            <>
              {bio.currentOrg.onelinerJD} at{" "}
              <a href={bio.currentOrg.webpage} className="a-highlighted-underlined font-medium text-primary hover:text-accent transition-colors duration-300" target="_blank" rel="noreferrer">
                {bio.currentOrg.name}
              </a>
              .
            </>
          ) : null}
        </p>
      </motion.div>
      <motion.div variants={itemVariants} className="mt-12">
        <a href="#projects" className="inline-flex items-center justify-center rounded-md border-2 border-primary bg-transparent px-8 py-4 font-mono text-sm md:text-base font-medium text-primary transition-all duration-300 hover:bg-primary/10">
          Check out my work!
        </a>
      </motion.div>
    </motion.section>
  );
}

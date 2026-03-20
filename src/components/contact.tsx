"use client";

import { social } from "@/lib/portfolio-data";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <motion.section 
      id="contact" 
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-24 max-w-2xl text-center py-24 md:py-32"
    >
      <div className="mb-6 font-mono text-lg text-primary">
        04. What&apos;s Next?
      </div>
      <h2 className="text-5xl md:text-6xl font-black text-foreground mb-6">
        Get In Touch
      </h2>
      <p className="text-lg text-secondary leading-relaxed mb-12">
        Although I&apos;m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just
        want to say hi, I&apos;ll try my best to get back to you!
      </p>
      
      <a
        href={`mailto:${social.mail}`}
        rel="noopener noreferrer"
        target="_blank"
        className="inline-flex items-center justify-center rounded-lg border-2 border-primary bg-transparent px-8 py-4 font-mono text-lg font-medium text-primary transition-all duration-300 hover:bg-primary/10 hover:-translate-y-1"
      >
        Say Hello
      </a>
    </motion.section>
  );
}

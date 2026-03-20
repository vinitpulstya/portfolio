import { social } from "@/lib/portfolio-data";

export function ContactSection() {
  return (
    <section id="contact" className="mx-auto mb-25 max-w-150 text-center">
      <h2 className="relative my-2.5 mb-5 w-full whitespace-nowrap font-mono text-[1.6rem] font-normal text-[#64ffda] before:relative before:mr-2.5 before:font-normal before:content-['0'_counter(section)_'.']">What is Next?</h2>
      <h2 className="text-[clamp(40px,5vw,60px)]">Get In Touch</h2>
      <p>
        Although I am not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just
        want to say hi, I will try my best to get back to you!
      </p>
      <a
        className="mt-12.5 rounded-[0.4rem] border border-[#64ffda] bg-transparent px-7 py-5 font-mono text-[1.4rem] leading-none text-[#64ffda] transition-all hover:-translate-x-1.25 hover:-translate-y-1.25 hover:shadow-[4px_4px_0_0_#64ffda]"
        href={`mailto:${social.mail}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        Say Hello
      </a>
    </section>
  );
}

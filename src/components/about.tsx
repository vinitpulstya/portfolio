import { about } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section id="about" className="max-w-225">
      <h2 className="numbered-heading">About Me</h2>
      <div className="inner">
        <div>
          <div>
            <p>
              Hello! My name is {about.name} and {about.description}
            </p>
            <p>
              {about.notableExperiences.length > 0 ? "Fast-forward to today, and I have had the privilege of working at " : ""}
              {about.notableExperiences.map((experience, index) => (
                <a key={experience.name} className="a-highlighted-underlined" href={experience.href} rel="noopener noreferrer" target="_blank">
                  {experience.displayText}
                  {index === about.notableExperiences.length - 1 ? "." : ","}
                </a>
              ))}
              My main focus these days is building accessible, inclusive products and digital experiences at{" "}
              <a className="a-highlighted-underlined" href={about.currentExperience.href} rel="noopener noreferrer" target="_blank">
                {about.currentExperience.name}
              </a>{" "}
              for a variety of clients.
            </p>
            <p>Here are a few technologies I have been working with recently:</p>
          </div>
          <ul className="mt-5 grid list-none grid-cols-[repeat(2,minmax(140px,200px))] gap-x-2.5 gap-y-0 overflow-hidden p-0">
            {about.skills.map((skill) => (
              <li key={skill} className="relative mb-2.5 pl-5 font-mono text-[1.3rem] before:absolute before:left-0 before:text-[1.4rem] before:text-[#64ffda] before:content-['▹']">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative max-w-75">
          <div className="group relative block w-full rounded-[0.4rem] bg-[#64ffda] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[0_20px_30px_-15px_rgba(2,12,27,0.7)] before:absolute before:left-0 before:top-0 before:block before:h-full before:w-full before:rounded-[0.4rem] before:bg-[#0a192f] before:mix-blend-screen before:content-[''] after:absolute after:left-5 after:top-5 after:-z-10 after:block after:h-full after:w-full after:rounded-[0.4rem] after:border-2 after:border-[#64ffda] after:content-[''] hover:after:left-3.75 hover:after:top-3.75 hover:after:translate-x-3 hover:after:translate-y-3">
            <div className="relative inline-block w-full max-w-full overflow-hidden rounded-[0.4rem] align-middle filter-[grayscale(100%)_contrast(1)] mix-blend-multiply transition-all group-hover:filter-none group-hover:mix-blend-normal">
              <img src="/images/pic.jpg" width={500} height={500} alt="Headshot" style={{ objectFit: "cover", opacity: 1 }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { projects } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";

export function ProjectsSection() {
  return (
    <section id="projects">
      <h2 className="numbered-heading">Some Things I have Built</h2>
      <ul className="m-0 list-none p-0">
        {projects.map((project) => (
          <li key={project.name} className="mb-12 grid items-center gap-2 rounded-md border border-[#233554] p-6 md:mb-16 md:grid-cols-2">
            <div>
              <div>
                <p className="my-4 font-mono text-[1.3rem] font-normal text-[#64ffda]">Featured Project</p>
                <h3 className="mb-6 text-[clamp(2.4rem,5vw,2.8rem)] text-[#ccd6f6]">
                  <a href={project.externalLink} rel="noopener noreferrer" target="_blank">
                    {project.name}
                  </a>
                </h3>
                <div className="relative z-2 rounded-[0.4rem] bg-[#112240] p-6 text-[1.6rem] text-[#a8b2d1] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
                  <p>{project.description}</p>
                </div>
                <ul className="relative z-2 my-6 flex list-none flex-wrap p-0">
                  {project.tools.map((tool) => (
                    <li key={tool} className="mb-2 mr-6 whitespace-nowrap font-mono text-[1.3rem] text-[#a8b2d1]">
                      {tool}
                    </li>
                  ))}
                </ul>
                <div className="relative mt-2.5 -ml-2.5 flex items-center text-[#ccd6f6]">
                  <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5">
                    <span className="-mt-1 inline-flex h-5.5 w-5.5 [&_svg]:h-5.5 [&_svg]:w-5.5">
                      <Icon name="github" />
                    </span>
                  </a>
                  <a href={project.externalLink} target="_blank" rel="noreferrer" className="flex items-center justify-center p-2.5">
                    <span className="-mt-1 inline-flex h-5.5 w-5.5 [&_svg]:h-5.5 [&_svg]:w-5.5">
                      <Icon name="external" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
            <div className="relative z-1 overflow-hidden rounded-[0.4rem] bg-[#64ffda] shadow-[0_10px_30px_-15px_rgba(2,12,27,0.7)]">
              <a href={project.externalLink} rel="noopener noreferrer" target="_blank" className="block h-full w-full">
                <div className="mix-blend-multiply">
                  <img width={700} height={438} src={project.imageSrc} alt={project.name} className="h-auto w-full rounded-sm" />
                </div>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

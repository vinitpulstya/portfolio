import { social } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="flex min-h-17.5 flex-col items-center justify-center p-3.75 text-center">
      <div className="mb-4 font-mono text-[1.2rem] leading-none text-[#a8b2d1]">
        <ul className="fade-enter-done m-0 hidden list-none items-center p-0 max-[600px]:flex">
          {social.profiles.map((profile) => (
            <li key={`footer-${profile.href}`}>
              <a href={profile.href} target="_blank" rel="noreferrer" className="p-2.5">
                <span className="inline-flex h-5 w-5 max-w-full align-middle [&_svg]:h-5 [&_svg]:w-5">
                  <Icon name={profile.icon} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 font-mono text-[1.2rem] leading-none text-[#a8b2d1]">
        Built by <a href="/#">Vinit Sharma</a>
      </div>
      <div className="mb-4 font-mono text-[1.2rem] leading-none text-[#a8b2d1]">
        Designed by <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">Brittany Chiang</a>
      </div>
    </footer>
  );
}

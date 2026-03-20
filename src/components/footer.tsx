import { social } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="flex min-h-[70px] flex-col items-center justify-center p-4 text-center">
      <div className="mb-4 font-mono text-sm leading-none text-secondary">
        <ul className="m-0 hidden list-none items-center p-0 max-[600px]:flex">
          {social.profiles.map((profile) => (
            <li key={`footer-${profile.href}`}>
              <a href={profile.href} target="_blank" rel="noreferrer" className="p-3 hover:text-primary transition-colors">
                <span className="inline-flex h-5 w-5 max-w-full align-middle [&_svg]:h-5 [&_svg]:w-5">
                  <Icon name={profile.icon} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-4 font-mono text-sm leading-none text-secondary">
        Built by <a href="/#" className="hover:text-primary transition-colors">Vinit Sharma</a>
      </div>
      <div className="mb-4 font-mono text-sm leading-none text-secondary">
        Designed by <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Brittany Chiang</a>
      </div>
    </footer>
  );
}

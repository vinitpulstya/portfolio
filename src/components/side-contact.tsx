import { social } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";

type SideContactProps = {
  orientation: "left" | "right";
  emailOnly: boolean;
};

export function SideContact({ orientation, emailOnly }: SideContactProps) {
  const wrapperClass = orientation === "left" ? "left-8 right-auto" : "left-auto right-8";

  return (
    <div className={`fixed bottom-0 z-10 hidden w-16 text-secondary xl:block ${wrapperClass}`}>
      {!emailOnly ? (
        <ul className="m-0 flex list-none flex-col items-center p-0 after:mx-auto after:mt-0 after:block after:h-24 after:w-px after:bg-secondary after:content-['']">
          {social.profiles.map((profile) => (
            <li key={profile.href}>
              <a href={profile.href} target="_blank" rel="noreferrer" className="p-3 mb-2 block hover:-translate-y-1 hover:text-primary transition-all duration-300">
                <span className="inline-flex h-5 w-5 max-w-full align-middle [&_svg]:h-5 [&_svg]:w-5">
                  <Icon name={profile.icon} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="m-0 flex list-none flex-col items-center p-0 after:mx-auto after:mt-0 after:block after:h-24 after:w-px after:bg-secondary after:content-['']">
          <a className="m-8 p-4 font-mono text-sm leading-none tracking-widest hover:-translate-y-1 hover:text-primary transition-all duration-300" style={{ writingMode: "vertical-rl" }} href={`mailto:${social.mail}`}>
            {social.mail}
          </a>
        </div>
      )}
    </div>
  );
}

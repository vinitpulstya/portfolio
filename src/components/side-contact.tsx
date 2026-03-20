import { social } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";

type SideContactProps = {
  orientation: "left" | "right";
  emailOnly: boolean;
};

export function SideContact({ orientation, emailOnly }: SideContactProps) {
  const wrapperClass = orientation === "left" ? "left-8 right-auto" : "left-auto right-8";

  return (
    <div className={`fixed bottom-0 z-10 hidden w-16 text-[#a8b2d1] min-[601px]:block ${wrapperClass}`}>
      {!emailOnly ? (
        <ul className="fade-enter-done m-0 flex list-none flex-col items-center p-0 after:mx-auto after:mt-0 after:block after:h-36 after:w-px after:bg-[#a8b2d1] after:content-['']">
          {social.profiles.map((profile) => (
            <li key={profile.href}>
              <a href={profile.href} target="_blank" rel="noreferrer" className="p-2.5">
                <span className="inline-flex h-5 w-5 max-w-full align-middle [&_svg]:h-5 [&_svg]:w-5">
                  <Icon name={profile.icon} />
                </span>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className="fade-enter-done m-0 flex list-none flex-col items-center p-0 after:mx-auto after:mt-0 after:block after:h-36 after:w-px after:bg-[#a8b2d1] after:content-['']">
          <a className="m-8 p-4 font-mono text-[1.2rem] leading-[1.6rem] tracking-[0.1rem] [writing-mode:vertical-rl]" href={`mailto:${social.mail}`}>
            {social.mail}
          </a>
        </div>
      )}
    </div>
  );
}

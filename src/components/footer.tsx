import { social } from "@/lib/portfolio-data";
import { Icon } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center py-10 text-center mt-20 border-t border-card-border/50">
      <div className="flex items-center gap-8 mb-6">
        {social.profiles.map((profile) => (
          <a 
            key={profile.href} 
            href={profile.href} 
            target="_blank" 
            rel="noreferrer" 
            className="text-secondary hover:text-primary transition-colors hover:-translate-y-1"
          >
            <span className="inline-block w-6 h-6 [&_svg]:w-6 [&_svg]:h-6">
              <Icon name={profile.icon} />
            </span>
          </a>
        ))}
      </div>
      <p className="font-mono text-sm text-secondary">
        Designed & Built by <span className="text-primary font-semibold">Vinit Sharma</span>
      </p>
    </footer>
  );
}

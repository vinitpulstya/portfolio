import { BioSection } from "@/components/bio";
import { AboutSection } from "@/components/about";
import { JobsSection } from "@/components/jobs";
import { ProjectsSection } from "@/components/projects";
import { ContactSection } from "@/components/contact";

export default function HomePage() {
  return (
    <div style={{ counterReset: "section 0" }} className="mx-auto min-h-screen w-full max-w-640 px-60 max-[600px]:px-12">
      <BioSection />
      <AboutSection />
      <JobsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

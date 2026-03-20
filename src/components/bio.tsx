import { bio } from "@/lib/portfolio-data";

export function BioSection() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-center pt-40">
      <div className="fadeup-enter-done" style={{ animationDelay: "100ms" }}>
        <h1 className="mb-7.5 ml-1 text-[clamp(1.4rem,5vw,1.6rem)] font-normal text-[#64ffda]">{bio.greet}</h1>
      </div>
      <div className="fadeup-enter-done" style={{ animationDelay: "200ms" }}>
        <h2 className="m-0 text-[clamp(40px,8vw,80px)]">{bio.name}.</h2>
      </div>
      <div className="fadeup-enter-done" style={{ animationDelay: "300ms", marginTop: "5px" }}>
        <h3 className="m-0 text-[clamp(40px,8vw,80px)] leading-[0.9] text-[#8892b0]">{bio.oneliner}</h3>
      </div>
      <div className="fadeup-enter-done" style={{ animationDelay: "400ms" }}>
        <p>
          {bio.description}{" "}
          {bio.currentOrg ? (
            <>
              {bio.currentOrg.onelinerJD} at{" "}
              <a href={bio.currentOrg.webpage} className="a-highlighted-underlined" target="_blank" rel="noreferrer">
                {bio.currentOrg.name}
              </a>
              .
            </>
          ) : null}
        </p>
      </div>
    </section>
  );
}

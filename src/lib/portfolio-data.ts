import type { About, Bio, Job, NavLink, Project, Social } from "@/lib/types";

const firstName = "Vinit";
const middleName = "";
const lastName = "Sharma";
const fullName = `${firstName} ${middleName} ${lastName}`.replace(/\s+/g, " ").trim();

export const workExperience: Job[] = [
  {
    name: "LTM",
    acronym: "LTM",
    href: "https://www.ltm.com/",
    startDate: "September 2024",
    endDate: "Present",
    title: "Senior Software Engineer",
    noteworthyTasks: [
      "Led frontend architecture and UI delivery across three concurrent enterprise web applications, acting as Lead Engineer while driving design decisions, code quality, and on-time delivery",
      "Mentored junior engineers and conducted design and code reviews to maintain frontend standards",
      "Owned end-to-end development of two frontends (React and Angular) and REST API layer in FastAPI for an ML powered Raw Material Harmonization Engine, integrating predictive model outputs into scalable, user-friendly workflows",
      "Architected high-performance, data-intensive UI components and tabular views with a focus on scalability and maintainability, implementing data transformation, normalization, diff highlighting, advanced filtering, searching, column customization, and performance optimization for large datasets - driving enterprise adoption and multi-million-dollar cost savings",
      "Led migration from Excel-based/manual workflows to modern React web applications, designing backend services and APIs to improve automation, reliability, and maintainability",
      "Owned authentication and role-based authorization (RBAC) for web applications, ensuring secure access control, compliance, and scalable user management",
      "Partnered with product and data teams to define UI requirements, technical approach, and delivery timelines",
    ],
  },
  {
    name: "Tata Consultancy Services",
    acronym: "TCS",
    href: "https://tcs.com/",
    startDate: "March 2021",
    endDate: "September 2024",
    title: "Developer",
    noteworthyTasks: [
      "Led technical debt reduction initiatives across three enterprise applications, modernizing frontend and backend components across Angular, React, Node.js, Java, and Docker-based systems",
      "Designed and delivered access management platforms integrating AWS and corporate LDAP, reducing access resolution time from hours to seconds and achieving 95%+ customer satisfaction",
      "Acted as a technical point of contact within the account, guiding multiple teams on frontend and backend development using Angular, React, Node.js, Python, and AWS services",
      "Built and maintained RESTful APIs on AWS using Python, supporting scalable web applications and automation workflows",
      "Contributed to CI/CD adoption and repository migration (Bitbucket -> GitLab), improving deployment reliability and development velocity",
    ],
  },
];

const currentExperience = workExperience[0];

export const social: Social = {
  profiles: [
    {
      href: "https://github.com/vinitpulstya",
      label: "Github",
      icon: "github",
    },
    {
      href: "https://www.instagram.com/pulstya_vinit",
      label: "Instagram",
      icon: "instagram",
    },
    {
      href: "https://www.linkedin.com/in/vinitpulstya",
      label: "LinkedIn",
      icon: "linkedin",
    },
  ],
  mail: "vinitsharma9876@gmail.com",
};

export const bio: Bio = {
  greet: "Hi, my name is",
  name: fullName,
  oneliner: "I build things for the web.",
  description: "I am a software engineer specializing in building exceptional digital experiences.",
  currentOrg: {
    name: currentExperience.name,
    webpage: currentExperience.href,
    onelinerJD: "Currently, I am focused on driving innovation",
  },
};

export const about: About = {
  name: firstName,
  description:
    "I enjoy creating things that live on the internet. My interest in web development started back in 2019 when I decided to delve into software engineering - turns out hacking together a custom reblog button taught me a lot about HTML and CSS!",
  notableExperiences: [],
  currentExperience,
  skills: [
    "React",
    "Angular",
    "TypeScript",
    "JavaScript",
    "Fast API",
    "Node.js",
    "AWS",
    "HTML",
    "CSS",
    "SCSS",
    "Python",
  ],
};

export const projects: Project[] = [
  {
    name: "Universal Converter",
    description:
      "Chrome extension to convert weight, length, time and more by selection or typing. Built using React and modern frontend best practices",
    github: "https://github.com/vinitpulstya/universal-converter",
    externalLink:
      "https://chromewebstore.google.com/detail/universal-converter/loobdnecfoednflbdcjmpdgldjchcmik?hl=en",
    tools: ["React", "Hero UI", "Tailwind CSS", "convert-units"],
    imageSrc: "/images/universal-converter.png",
  },
  {
    name: "Zentry Clone",
    description: "Developed with ReactJS and animations using GSAP. Beautiful landing page",
    github: "https://github.com/vinitpulstya/learn-zentry-clone",
    externalLink: "https://learn-zentry-clone.netlify.app/",
    tools: ["React", "GSAP", "Tailwind CSS"],
    imageSrc: "/images/zentry-clone.jpg",
  },
  {
    name: "Natours",
    description: "Travel booking application template, built purely using HTML and CSS.",
    github: "https://github.com/vinitpulstya/Natours",
    externalLink: "https://natours-sass-udemy.netlify.app/",
    tools: ["VS Code", "HTML", "SCSS"],
    imageSrc: "/images/natours.jpg",
  },
  {
    name: "Web Store",
    description:
      "Buy mobile phones from this application built using React. And pay using the integrated PayPal button. Just kidding please do not buy anything :p",
    github: "https://github.com/vinitpulstya/Natours",
    externalLink: "https://my-web-store.netlify.app/",
    tools: ["React", "VS Code", "HTML", "CSS", "Material UI"],
    imageSrc: "/images/web-store.jpg",
  },
  {
    name: "Material Git",
    description:
      "Simple github dashboard to view your followers, following, gists and more. Want a demo? Use email-vinit@test.com and password-test@123",
    github: "https://github.com/vinitpulstya/material_git",
    externalLink: "https://material-git.netlify.app/",
    tools: ["React", "VS Code", "HTML", "CSS", "Material UI"],
    imageSrc: "/images/material-git.jpg",
  },
];

export const navLinks: NavLink[] = [
  { href: "/#about", displayText: "About", animationDelayMs: 0 },
  { href: "/#jobs", displayText: "Experience", animationDelayMs: 100 },
  { href: "/#projects", displayText: "Work", animationDelayMs: 200 },
  { href: "/#contact", displayText: "Contact", animationDelayMs: 300 },
];

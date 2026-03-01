import { Injectable } from '@angular/core';
import { About } from '../models/about-model';
import { Bio } from '../models/bio-model';
import { Social } from '../models/social-model';
import { SvgSafehtmlService } from './svg-safehtml.service';
import { Project } from '../models/project-model';
import { Job } from '../models/job-model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly firstName: String = 'Vinit';
  private readonly middleName: String = '';
  private readonly lastName: String = 'Sharma';
  private readonly fullName: String = `${this.firstName} ${this.middleName} ${this.lastName}`;

  // Array order latest to old
  public readonly WorkExp: Array<Job> = [
    {
      name: 'LTM',
      acronym: 'LTM',
      href: 'https://www.ltm.com/',
      start_date: 'September 2024',
      end_date: 'Present',
      title: 'Senior Software Engineer',
      noteworthy_tasks: [
        'Led frontend architecture and UI delivery across three concurrent enterprise web applications, acting as Lead Engineer while driving design decisions, code quality, and on-time delivery',
        'Mentored junior engineers and conducted design and code reviews to maintain frontend standards',
        'Owned end-to-end development of two frontends (React and Angular) and REST API layer in FastAPI for an ML powered Raw Material Harmonization Engine, integrating predictive model outputs into scalable, user-friendly workflows',
        'Architected high-performance, data-intensive UI components and tabular views with a focus on scalability and maintainability, implementing data transformation, normalization, diff highlighting, advanced filtering, searching, column customization, and performance optimization for large datasets - driving enterprise adoption and multi-million-dollar cost savings',
        'Led migration from Excel-based/manual workflows to modern React web applications, designing backend services and APIs to improve automation, reliability, and maintainability',
        'Owned authentication and role-based authorization (RBAC) for web applications, ensuring secure access control, compliance, and scalable user management',
        'Partnered with product and data teams to define UI requirements, technical approach, and delivery timelines',
      ],
    },
    {
      name: 'Tata Consultancy Services',
      acronym: 'TCS',
      href: 'https://tcs.com/',
      start_date: 'March 2021',
      end_date: 'September 2024',
      title: 'Developer',
      noteworthy_tasks: [
        'Led technical debt reduction initiatives across three enterprise applications, modernizing frontend and backend components across Angular, React, Node.js, Java, and Docker-based systems',
        'Designed and delivered access management platforms integrating AWS and corporate LDAP, reducing access resolution time from hours to seconds and achieving 95%+ customer satisfaction',
        'Acted as a technical point of contact within the account, guiding multiple teams on frontend and backend development using Angular, React, Node.js, Python, and AWS services',
        'Built and maintained RESTful APIs on AWS using Python, supporting scalable web applications and automation workflows',
        'Contributed to CI/CD adoption and repository migration (Bitbucket → GitLab), improving deployment reliability and development velocity',
      ],
    },
  ];

  public readonly social: Social = {
    profiles: [
      {
        href: 'https://github.com/vinitpulstya',
        label: 'Github',
        svg: this._svgDict.github,
      },
      {
        href: 'https://www.instagram.com/pulstya_vinit',
        label: 'Instagram',
        svg: this._svgDict.instagram,
      },
      {
        href: 'https://www.linkedin.com/in/vinitpulstya',
        label: 'LinkedIn',
        svg: this._svgDict.linkedin,
      },
    ],
    mail: 'vinitsharma9876@gmail.com',
  };

  public readonly bio: Bio = {
    greet: 'Hi, my name is',
    name: this.fullName,
    oneliner: 'I build things for the web.',
    description:
      'I’m a software engineer specializing in building exceptional digital experiences.',
    currentOrg: {
      name: this.WorkExp[0].name,
      webpage: this.WorkExp[0].href,
      onelinerJD: 'Currently, I’m focused on driving innovation',
    },
  };

  public readonly about: About = {
    name: this.firstName,
    description: `I enjoy creating things that live on
    the internet. My interest in web development started back in 2019 when
    I decided to delve into software engineering — turns out hacking
    together a custom reblog button taught me a lot about HTML & CSS!`,
    notableExperiences: [
      // {...this.WorkExp.tcs, display_text: "a consultancy company"}
    ],
    currentExperience: this.WorkExp[0],
    skills: [
      'React',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Fast API',
      'Node.js',
      'AWS',
      'HTML',
      'CSS',
      'SCSS',
      'Python',
    ],
  };

  public readonly projects: Array<Project> = [
    {
      name: 'Universal Converter',
      description: `Chrome extension to convert weight, length, time and more by selection or typing. Built using React and modern 
frontend best practices`,
      github: 'https://github.com/vinitpulstya/universal-converter',
      external_link: 'https://chromewebstore.google.com/detail/universal-converter/loobdnecfoednflbdcjmpdgldjchcmik?hl=en',
      tools: ['React', 'Hero UI', 'Tailwind CSS', 'convert-units'],
      image_src: '/assets/images/universal-converter.png',
    },
    {
      name: 'Zentry Clone',
      description: `Developed with ReactJS and animations using GSAP. Beautiful landing page`,
      github: 'https://github.com/vinitpulstya/learn-zentry-clone',
      external_link: 'https://learn-zentry-clone.netlify.app/',
      tools: ['React', 'GSAP', 'Tailwind CSS'],
      image_src: '/assets/images/zentry-clone.jpg',
    },
    // {
    //   name: 'Open API',
    //   description: `This web-application provides a list of more than 1.4K open-source API’s, user can filter-out from the list
    // using various filtering options available. Thanks to ‘public-apis’ project.`,
    //   github: 'https://github.com/vinitpulstya/open-api',
    //   external_link: 'https://openapi1.netlify.app/',
    //   tools: ['React', 'VS Code', 'HTML', 'SCSS', 'Material UI'],
    //   image_src: '/assets/images/open-api.jpg',
    // },
    {
      name: 'Natours',
      description: `Travel booking application template, built purely using HTML and CSS.`,
      github: 'https://github.com/vinitpulstya/Natours',
      external_link: 'https://natours-sass-udemy.netlify.app/',
      tools: ['VS Code', 'HTML', 'SCSS'],
      image_src: '/assets/images/natours.jpg',
    },
    {
      name: 'Web Store',
      description: `Buy mobile phones from this application built using React. And pay using the intergated PayPal button. Just kidding please don't buy anything :p`,
      github: 'https://github.com/vinitpulstya/Natours',
      external_link: 'https://my-web-store.netlify.app/',
      tools: ['React', 'VS Code', 'HTML', 'CSS', 'Material UI'],
      image_src: '/assets/images/web-store.jpg',
    },
    {
      name: 'Material Git',
      description: `Simple github dashboard to view your followers, following, gists and more. Want a demo? Use email-vinit@test.com and password-test@123`,
      github: 'https://github.com/vinitpulstya/material_git',
      external_link: 'https://material-git.netlify.app/',
      tools: ['React', 'VS Code', 'HTML', 'CSS', 'Material UI'],
      image_src: '/assets/images/material-git.jpg',
    },
  ];

  constructor(private _svgDict: SvgSafehtmlService) {}
}

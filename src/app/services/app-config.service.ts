import { Injectable } from '@angular/core';
import { About } from '../models/about-model';
import { Bio } from '../models/bio-model';
import { Experience } from '../models/experience-model';
import { Social } from '../models/social-model';
import { SvgSafehtmlService } from './svg-safehtml.service';
import { Project } from '../models/project-model';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  private readonly firstName: String = 'Vinit';
  private readonly middleName: String = '';
  private readonly lastName: String = 'Sharma';
  private readonly fullName: String = `${this.firstName} ${this.middleName} ${this.lastName}`;

  private readonly WorkExp = {
    tcs: {
      name: 'Tata Consultancy Services',
      acronym: 'TCS',
      href: 'https://tcs.com/',
    },
  };

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
      name: this.WorkExp.tcs.name,
      webpage: this.WorkExp.tcs.href,
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
    currentExperience: this.WorkExp.tcs,
    skills: [
      'JavaScript',
      'React',
      'Angular',
      'Flask',
      'Node.js',
      'TypeScript',
      'AWS',
      'HTML',
      'CSS',
      'SCSS',
      'Python',
    ],
  };

  public readonly projects: Array<Project> = [
    {
      name: 'Open API',
      description: `This web-application provides a list of more than 1.4K open-source API’s, user can filter-out from the list 
    using various filtering options available. Thanks to ‘public-apis’ project.`,
      github: 'https://github.com/vinitpulstya/open-api',
      external_link: 'https://openapi1.netlify.app/',
      tools: ['React', 'VS Code', 'HTML', 'SCSS', 'Material UI'],
      image_src: '/assets/images/open-api.jpg',
    },
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

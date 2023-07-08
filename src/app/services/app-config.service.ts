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
      name: 'Tata Consultancy Services',
      acronym: 'TCS',
      href: 'https://tcs.com/',
      start_date: 'March 2021',
      end_date: 'Present',
      title: 'Developer',
      noteworthy_tasks: [
        'Worked closely with DevOps to migrate a high-resolution image viewing application from on-premises to CaaS',
        'Successfully developed and delivered two access management applications for AWS and corporate LDAP using Angular with over 95% customer satisfaction rating.',
        'Developed REST APIs for aforementioned web applications on AWS using python. Used S3, API gateway, CloudFront, AWS lambda, SES and Step functions for the same',
        'Developed a blogging application using MEAN stack during training and also developed UI for an application using Angular that fetched data from JIRA and displayed it in graphical format.',
        'Recognized as a contextual master in TCS due to my successful and efficient project execution that brought value to the customer.',
        'Migrated code-repositories from bitbucket to GitLab.',
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

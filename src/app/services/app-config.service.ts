import { Injectable } from '@angular/core';
import { Bio } from '../models/bio-model';
import { Social } from '../models/social-model';
import { SvgSafehtmlService } from './svg-safehtml.service';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  public readonly social: Social = {
    profiles: [
      {
        href: 'https://github.com/vinitpulstya',
        label: 'Github',
        svg: this.svgDict.github,
      },
      {
        href: 'https://www.instagram.com/pulstya_vinit',
        label: 'Instagram',
        svg: this.svgDict.instagram,
      },
      {
        href: 'https://www.linkedin.com/in/vinitpulstya',
        label: 'LinkedIn',
        svg: this.svgDict.linkedin,
      },
    ],
    mail: 'vinitsharma9876@gmail.com',
  };

  public readonly bio: Bio = {
    greet: "Hi, my name is",
    name: "Vinit Sharma",
    oneliner: "I build things for the web.",
    description: "I’m a software engineer specializing in building exceptional digital experiences.",
    currentOrg: {
      name: "Tata Consultancy Services",
      webpage: "https://tcs.com/",
      // onelinerJD: "Currently, I’m focused on building accessible, human-centered products"
      onelinerJD: "Currently, I’m focused on driving innovation"
    }
  };
  constructor(private svgDict: SvgSafehtmlService) {}
}

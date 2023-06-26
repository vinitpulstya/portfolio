import { Component } from '@angular/core';
import { About } from 'src/app/models/about-model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'wgt-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public readonly aboutStaticData: About = this.appConfig.about;

  constructor (private appConfig: AppConfigService) {};
}

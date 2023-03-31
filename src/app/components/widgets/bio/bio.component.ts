import { Component } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'wgt-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})
export class BioComponent {
  public readonly bio = this.appConfig.bio;

  constructor(private appConfig: AppConfigService) {}
}

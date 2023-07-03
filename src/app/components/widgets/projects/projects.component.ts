import { Component } from '@angular/core';
import { Project } from 'src/app/models/project-model';
import { AppConfigService } from 'src/app/services/app-config.service';
import { SvgSafehtmlService } from 'src/app/services/svg-safehtml.service';

@Component({
  selector: 'wgt-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor (private _svgDict: SvgSafehtmlService, private _appConfig: AppConfigService) {}

  public github = this._svgDict.github;
  public external = this._svgDict.external;

  public projects: Array<Project> = this._appConfig.projects;
}

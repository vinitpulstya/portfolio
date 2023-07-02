import { Component } from '@angular/core';
import { SvgSafehtmlService } from 'src/app/services/svg-safehtml.service';

@Component({
  selector: 'wgt-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  constructor (private _svgDict: SvgSafehtmlService) {}

  public github = this._svgDict.github;
  public external = this._svgDict.external;
}

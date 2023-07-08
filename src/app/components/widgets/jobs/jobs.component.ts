import { Component } from '@angular/core';
import { Job } from 'src/app/models/job-model';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'wgt-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent {
constructor (private _appConfig: AppConfigService) {}

public readonly jobs = this._appConfig.WorkExp;
public selected_job:Job = this.jobs[0];

public handleJobTab = (selection: number):void => {
  // this.selected_job = selection;
  this.selected_job = this.jobs[selection];
};
}

import { Component } from '@angular/core';
import { AppConfigService } from './services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _appConfig: AppConfigService) {}
  title = `${this._appConfig.bio.name}`;
}

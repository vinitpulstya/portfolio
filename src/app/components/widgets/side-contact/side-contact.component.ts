import { Component, Input, OnInit } from '@angular/core';
import { AppConfigService } from 'src/app/services/app-config.service';

@Component({
  selector: 'wgt-side-contact',
  templateUrl: './side-contact.component.html',
  styleUrls: ['./side-contact.component.scss'],
})
export class SideContactComponent implements OnInit {
  @Input() orientation: string | undefined;
  @Input() emailOnly: boolean = false;
  public wrapper_class: string = '';
  public readonly social = this._appConfig.social;

  ngOnInit() {
    this.wrapper_class = `side-contact__wrapper${
      this.orientation ? (this.orientation === 'left' ? '-left' : '-right') : ''
    }`;
  }

  constructor(private _appConfig: AppConfigService) {}
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public readonly navlinks: Array<NavLinks> = [
    { href: '/#about', display_text: 'About', style: 'animation-delay: 0ms' },
    {
      href: '/#jobs',
      display_text: 'Experience',
      style: 'animation-delay: 100ms',
    },
    {
      href: '/#projects',
      display_text: 'Work',
      style: 'animation-delay: 200ms',
    },
    {
      href: '/#contact',
      display_text: 'Contact',
      style: 'animation-delay: 300ms',
    },
  ];

  public showMenu: Boolean = false;

  public handleMenuClick = ():void => {
    this.showMenu = !this.showMenu;
  };
}

interface NavLinks {
  href: string;
  display_text: string;
  style: string;
}

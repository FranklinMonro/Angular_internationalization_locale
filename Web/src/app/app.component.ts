import { Component } from '@angular/core';

interface TabListItems {
  tabName: string;
  link?: string;
  show?: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tabNavItems: TabListItems[] = [
    { tabName: 'Register Localization', link: 'localization' },
    { tabName: 'Register Regions', link: 'register' },
    { tabName: 'Dynamics Register', link: 'dynamics' },
    { tabName: 'Register Table', link: 'table' },
  ];
  activeLink = this.tabNavItems[0].tabName;
}

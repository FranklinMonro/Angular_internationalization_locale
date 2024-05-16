import { Component } from '@angular/core';

interface TabListItems {
  tabName: string;
  link?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  tabNavItems: TabListItems[] = [
    { tabName: 'Register Localization', link: 'localization' },
    { tabName: 'Register Dynamics', link: 'register' },
    { tabName: 'Dynamics Register', link: 'dynamics' },
  ];
  activeLink = this.tabNavItems[0].tabName;
}

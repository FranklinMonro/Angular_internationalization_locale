import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  tabNavItems = [
    { tabName: 'register', link: 'register' },
    { tabName: 'chat', link: 'chat' },
  ];

  activeLink = this.tabNavItems[0].tabName;

  constructor() {}
}

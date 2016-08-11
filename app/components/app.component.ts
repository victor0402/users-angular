import {Component}          from '@angular/core';

import '../rxjs-extensions';

@Component({
    selector: 'my-app',

    template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Início</a>
      <a routerLink="/people" routerLinkActive="active">Pessoas</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    styleUrls: ['./app/assets/css/app.component.css']
})

export class AppComponent {
    title = 'Pessoas';
}
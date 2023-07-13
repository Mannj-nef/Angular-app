import { Component } from '@angular/core';
import { routerLinks } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Tour of Heros';
  name = 'hello manh quan';

  routerHero = routerLinks;
}

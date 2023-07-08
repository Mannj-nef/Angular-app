import { Component, Input } from '@angular/core';

import { IHero } from '../heroes/type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent {
  @Input() hero?: IHero;
}

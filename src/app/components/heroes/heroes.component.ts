import { Component } from '@angular/core';
import { IHero } from './type';
import { HEROES } from '../../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent {
  heroes: IHero[] = HEROES;

  selectedHero?: IHero;

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
  }
}

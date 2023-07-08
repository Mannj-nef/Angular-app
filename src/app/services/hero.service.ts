import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heros';
import { IHero } from '../components/heroes/type';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  getHeroes(): IHero[] {
    return HEROES;
  }
}

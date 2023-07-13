import { Injectable } from '@angular/core';
import { HEROES } from '../mock-heros';
import { IHero } from '../components/heroes/type';
import { Observable, of } from 'rxjs';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessagesService) {}

  getHeroes(): Observable<IHero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHeroById(id: number): Observable<IHero | undefined> {
    const hero = HEROES.find((hero) => hero.id === id);

    this.messageService.add(`HeroService: fetched hero id=${id}`);

    return of(hero);
  }
}

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
    const hero = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return hero;
  }
}

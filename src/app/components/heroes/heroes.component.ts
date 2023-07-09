import { Component, OnInit } from '@angular/core';
import { IHero } from './type';
import { HeroService } from '../../services/hero.service';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];

  selectedHero?: IHero;

  constructor(
    private heroService: HeroService,
    private messageService: MessagesService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: IHero): void {
    this.selectedHero = hero;
    this.messageService.add(
      `HeroesComponent: Selected hero id=${hero.id}, name = ${hero.name}`
    );
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
}

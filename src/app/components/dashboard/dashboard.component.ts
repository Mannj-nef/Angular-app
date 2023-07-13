import { Component, OnInit } from '@angular/core';
import { IHero } from '../heroes/type';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroServices: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroServices.getHeroes().subscribe((heros) => {
      console.log({ heros });

      return (this.heroes = heros.slice(0, 4));
    });

    console.log(this.heroes);
  }
}

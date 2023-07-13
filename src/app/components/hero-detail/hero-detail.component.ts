import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroService } from 'src/app/services/hero.service';
import { IHero } from '../heroes/type';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  hero: IHero | undefined;

  constructor(
    private heroService: HeroService,
    private location: Location,
    private rote: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.rote.snapshot.paramMap.get('id'));
    console.log(id);

    this.heroService.getHeroById(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}

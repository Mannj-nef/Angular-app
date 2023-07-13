import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';

export const routerLinks = {
  heroes: { link: 'heroes', title: 'heroes' },
  dashBoard: { link: 'dashboard', title: 'dashboard' },
  heroDetail: { link: 'detail/:id', title: 'horoDetail' },
};

const router: Routes = [
  {
    path: '',
    redirectTo: `/${routerLinks.dashBoard.link}`,
    pathMatch: 'full',
  },

  {
    path: routerLinks.heroes.link,
    component: HeroesComponent,
  },

  {
    path: routerLinks.dashBoard.link,
    component: DashboardComponent,
  },

  {
    path: routerLinks.heroDetail.link,
    component: HeroDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

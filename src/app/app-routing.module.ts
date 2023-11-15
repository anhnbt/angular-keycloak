import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {DashboardComponent} from './dashboard/dashboard.component';
import {ChildAComponent} from "./child-a/child-a.component";
import {ChildBComponent} from "./child-b/child-b.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'heroes', component: HeroesComponent,
  },
  {path: 'detail/:id', component: HeroDetailComponent},
  {path: 'first-component', component: FirstComponent,
    children: [
      {
        path: 'child-a', // child route path
        component: ChildAComponent, // child route component that the router renders
      },
      {
        path: 'child-b',
        component: ChildBComponent, // another child route component that the router renders
      },
    ]},
  {path: 'second-component', component: SecondComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

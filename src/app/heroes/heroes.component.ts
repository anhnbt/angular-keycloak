import { Component } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {FormsModule} from "@angular/forms";
import {NgFor, NgIf, UpperCasePipe} from "@angular/common";
import {HeroService} from "../hero.service";

@Component({
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}

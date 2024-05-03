import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes'; //Importamos el mock HEROES 
import { HeroService } from '../hero.service';//
import { MessageService } from '../message.service';//


//Agregamos una propieda hero llamado Windstorm
//Eliminamos hero id y name de la clase HeroesComponent
//Agregamos COnstructor

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

/*
export class HeroesComponent implements OnInit {
    
    heroes = HEROES;
    selectedHero: Hero | undefined;
  
    constructor() { }
  
    ngOnInit() {
    }
    
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
    }
  }
  */

  export class HeroesComponent implements OnInit {

    selectedHero?: Hero;
  
    heroes: Hero[] = [];
  
    constructor(private heroService: HeroService, private messageService: MessageService) { }
  
    ngOnInit(): void {
      this.getHeroes();
    }
  
    onSelect(hero: Hero): void {
      this.selectedHero = hero;
      this.messageService.add(`Componente Héroes: Héroe seleccionado con Id=${hero.id}`);
    }
  
    getHeroes(): void {
      this.heroService.getHeroes()
          .subscribe(heroes => this.heroes = heroes);
    }

  
  }
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('Hero Service : fetch Heroes');
    return heroes;
  }
  getHero(id :number): Observable<Hero> {
    const hero = HEROES.find(h=>h.id===id) as Hero;
    this.messageService.addMessage(`Hero Service : fetched hero with id ${id}`);
    return of(hero);
  }
  constructor(private messageService: MessageService) {}
}

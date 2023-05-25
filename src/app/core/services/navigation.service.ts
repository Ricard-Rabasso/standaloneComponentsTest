import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private menuToggled = new BehaviorSubject<boolean>(true);
  public menuToggled$ = this.menuToggled.asObservable();

  constructor() { }

  toggleMenu() {
    console.log('service: toggleMenu', this.menuToggled.value);
    this.menuToggled.next(!this.menuToggled.value);
  }

  menuOff() {
    this.menuToggled.next(false);
  }

  menuOn() {  
    this.menuToggled.next(true);
  }

}

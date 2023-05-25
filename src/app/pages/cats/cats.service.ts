import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  // API documentation: https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
  readonly apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';

  private readonly http = inject(HttpClient);
  private cats = new BehaviorSubject<any[]>([]);
  public cats$ = this.cats.asObservable();
  
  getCats(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      console.log('cats', this.cats);
      this.cats.next(data);
    });
  }
  

}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogsService {

  readonly apiUrl = 'https://api.thedogapi.com/v1/images/search?limit=10';

  private readonly http = inject(HttpClient);
  private dogs = new BehaviorSubject<any[]>([]);
  public dogs$ = this.dogs.asObservable();
  
  getDogs(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((data) => {
      console.log('cats', this.dogs);
      this.dogs.next(data);
    });
  }
}

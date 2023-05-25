import { Component, inject, OnInit } from '@angular/core';
import { CatsService } from './cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  private readonly catsService = inject(CatsService);
  cats$ = this.catsService.cats$;

  ngOnInit(): void {
    this.catsService.getCats();
  }


}

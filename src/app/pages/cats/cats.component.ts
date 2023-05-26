import { Component, inject, OnInit } from '@angular/core';
import { CatsService } from './cats.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  standalone: true,
  imports: [ CommonModule, ]
})
export default class CatsComponent implements OnInit {

  private readonly catsService = inject(CatsService);
  cats$ = this.catsService.cats$;

  ngOnInit(): void {
    this.catsService.getCats();
  }

}

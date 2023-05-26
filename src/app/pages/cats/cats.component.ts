import { Component, inject, OnInit } from '@angular/core';
import { CatsService } from './cats.service';
import { AsyncPipe, Location, NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  standalone: true,
  imports: [ NgIf, NgFor, AsyncPipe, MatButtonModule, MatIconModule, RouterModule]
})
export default class CatsComponent implements OnInit {

  show: boolean = true;
  private readonly catsService = inject(CatsService);
  public readonly location = inject(Location);
  cats$ = this.catsService.cats$;

  ngOnInit(): void {
    this.catsService.getCats();
  }

  goBack(): void {
    this.location.back();
  }

}

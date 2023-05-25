import { Component, OnInit, inject } from '@angular/core';
import { DogsService } from './dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  private readonly dogsService = inject(DogsService);
  dogs$ = this.dogsService.dogs$;

  ngOnInit(): void {
    this.dogsService.getDogs();
  }
}

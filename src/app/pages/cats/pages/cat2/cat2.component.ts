import { Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cat2',
  templateUrl: './cat2.component.html',
  styleUrls: ['./cat2.component.scss'],
  standalone: true,
  imports: [ MatIconModule, MatButtonModule]
})
export default class Cat2Component {

  private readonly location = inject(Location);

  goBack(): void {
    this.location.back();
  }
}

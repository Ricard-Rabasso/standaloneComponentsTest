import { CommonModule, Location } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cat1',
  templateUrl: './cat1.component.html',
  styleUrls: ['./cat1.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule]
})
export default class Cat1Component {

  private readonly location = inject(Location);

  goBack(): void {
    this.location.back();
  }

}

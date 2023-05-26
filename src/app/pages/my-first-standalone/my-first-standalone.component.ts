import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-my-first-standalone',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './my-first-standalone.component.html',
  styleUrls: ['./my-first-standalone.component.scss']
})
export default class MyFirstStandaloneComponent {

}

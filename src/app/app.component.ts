import { Component, OnInit, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavigationService } from './core/services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'techTalk-demo-1';

  private readonly hideMenuOnEnterPage: boolean = false;
  private readonly router = inject(Router);
  private readonly navigationService = inject(NavigationService);

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (this.hideMenuOnEnterPage) {
          this.navigationService.menuOff();
        }
      }
    });
  }

}

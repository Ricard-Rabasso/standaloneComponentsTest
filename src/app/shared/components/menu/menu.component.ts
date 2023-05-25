import { Component, AfterViewInit, ViewChild, inject, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuComponent implements AfterViewInit, OnInit {

  private readonly navigationService = inject(NavigationService);
  
  @ViewChild('drawer', {static: false}) drawer!: MatDrawer;
 
  public menuToggled$ = this.navigationService.menuToggled$;

  ngOnInit(): void {}


  ngAfterViewInit(): void {
   /* console.log('afterViewInit');
    this.drawer.openedChange.subscribe((opened) => {
      console.log('openedChange', opened);
      if (!opened) {
        this.navigationService.toggleMenuOff();
      }
    });*/

  }

  public closeMenu(): void {
    this.navigationService.menuOff();
  }

}

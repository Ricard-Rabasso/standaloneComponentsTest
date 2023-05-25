import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {

  private readonly navigationService = inject(NavigationService);

  public toggleMenu(): void {
    console.log('header toggleMenu');
    this.navigationService.toggleMenu();
  }

}

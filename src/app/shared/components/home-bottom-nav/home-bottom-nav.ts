import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BottomNavItem } from '../../models/home.models';

@Component({
  selector: 'app-home-bottom-nav',
  imports: [RouterLink],
  templateUrl: './home-bottom-nav.html',
  styleUrl: './home-bottom-nav.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeBottomNav {
  readonly activeItem = input<BottomNavItem | null>(null);
  readonly unreadCount = input<number>(0);
  readonly muted = input<boolean>(false);
}
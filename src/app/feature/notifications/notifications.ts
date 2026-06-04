import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeBottomNav } from '../../shared/components/home-bottom-nav/home-bottom-nav';
import { FeatureHeader } from '../../shared/components/feature-header/feature-header';

@Component({
  selector: 'app-notifications',
  imports: [FeatureHeader, HomeBottomNav],
  templateUrl: './notifications.html',
  styleUrl: './notifications.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Notifications {}
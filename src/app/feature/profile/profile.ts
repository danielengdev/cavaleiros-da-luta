import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HomeBottomNav } from '../../shared/components/home-bottom-nav/home-bottom-nav';
import { FeatureHeader } from '../../shared/components/feature-header/feature-header';

@Component({
  selector: 'app-profile',
  imports: [FeatureHeader, HomeBottomNav],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile {}
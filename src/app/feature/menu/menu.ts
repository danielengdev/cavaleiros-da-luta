import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HomeBottomNav } from '../../shared/components/home-bottom-nav/home-bottom-nav';
import { FeatureHeader } from '../../shared/components/feature-header/feature-header';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, FeatureHeader, HomeBottomNav],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {}
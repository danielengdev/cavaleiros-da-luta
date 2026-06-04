import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LinksMgmtComponent } from '../links-management/links-management';

type DashboardSection = 'home' | 'links';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, LinksMgmtComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Dashboard {
  readonly activeSection = signal<DashboardSection>('home');

  setSection(section: DashboardSection) {
    this.activeSection.set(section);
  }

  backToHome() {
    this.activeSection.set('home');
  }
}

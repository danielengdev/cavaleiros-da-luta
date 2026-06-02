import { Component, inject, signal, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from '../../../core/service/auth';
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
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  readonly activeSection = signal<DashboardSection>('home');

  setSection(section: DashboardSection) {
    this.activeSection.set(section);
  }

  backToHome() {
    this.activeSection.set('home');
  }

  async logout(): Promise<void> {
    const { error } = await this.authService.logout();

    if (error) {
      console.error('Erro ao sair da conta:', error.message);
      return;
    }

    await this.router.navigate(['/login']);
  }
}

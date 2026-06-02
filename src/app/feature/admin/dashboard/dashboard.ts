import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../../core/service/auth';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);

  async logout(): Promise<void> {
    const { error } = await this.authService.logout();

    if (error) {
      console.error('Erro ao sair da conta:', error.message);
      return;
    }

    await this.router.navigate(['/login']);
  }
}

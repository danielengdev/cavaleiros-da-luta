import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import type { User } from '@supabase/supabase-js';
import { Auth } from '../../core/service/auth';
import { FeatureHeader } from '../../shared/components/feature-header/feature-header';

@Component({
  selector: 'app-menu',
  imports: [RouterLink, FeatureHeader],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Menu {
  private readonly authService = inject(Auth);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  readonly user = signal<User | null>(null);
  readonly isAuthenticated = computed(() => this.user() !== null);

  readonly menuItems = computed(() => {
    const items = [
      {
        title: 'Links',
        route: '/page',
      },
      {
        title: 'Perfil',
        route: '/profile',
      },
      {
        title: 'Notificacoes',
        route: '/notifications',
      },
    ];

    if (this.isAuthenticated()) {
      items.push({
        title: 'Dashboard',
        route: '/dashboard',
      });
    }

    return items;
  });

  constructor() {
    void this.syncUser();

    const {
      data: { subscription },
    } = this.authService.onAuthStateChange((user) => {
      this.user.set(user);
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  async handleAuthAction(): Promise<void> {
    if (!this.isAuthenticated()) {
      await this.router.navigate(['/login']);
      return;
    }

    const { error } = await this.authService.logout();

    if (error) {
      console.error('Erro ao sair da conta:', error.message);
      return;
    }

    await this.router.navigate(['/login']);
  }

  private async syncUser(): Promise<void> {
    const user = await this.authService.getUser();
    this.user.set(user);
  }
}
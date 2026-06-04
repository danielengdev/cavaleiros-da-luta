import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import type { User } from '@supabase/supabase-js';
import { filter, map, startWith } from 'rxjs/operators';
import { Auth } from '../../../core/service/auth';
import { BottomNavItem, UserSummary } from '../../models/home.models';
import { HomeBottomNav } from '../home-bottom-nav/home-bottom-nav';
import { TopBar } from '../top-bar/top-bar';

@Component({
  selector: 'app-app-shell',
  imports: [RouterOutlet, TopBar, HomeBottomNav],
  templateUrl: './app-shell.html',
  styleUrl: './app-shell.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppShell {
  private readonly router = inject(Router);
  private readonly authService = inject(Auth);
  private readonly destroyRef = inject(DestroyRef);

  readonly user = signal<UserSummary | null>(null);
  readonly isAuthenticated = computed(() => this.user() !== null);

  readonly unreadCount = signal(3);

  constructor() {
    void this.syncUser();

    const {
      data: { subscription },
    } = this.authService.onAuthStateChange((user) => {
      this.user.set(this.mapUserSummary(user));
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
      startWith(this.router.url),
    ),
    { initialValue: this.router.url },
  );

  readonly activeItem = computed<BottomNavItem | null>(() => {
    const url = this.currentUrl();

    if (url.startsWith('/dashboard')) {
      return null;
    }

    if (url.startsWith('/profile')) {
      return 'profile';
    }

    if (url.startsWith('/notifications')) {
      return 'notifications';
    }

    if (url.startsWith('/home') || url.startsWith('/page') || url.startsWith('/menu')) {
      return 'home';
    }

    return null;
  });

  readonly isAdminRoute = computed(() => this.currentUrl().startsWith('/dashboard'));

  readonly shellUnreadCount = computed(() => (this.isAdminRoute() ? 0 : this.unreadCount()));

  private async syncUser(): Promise<void> {
    const user = await this.authService.getUser();
    this.user.set(this.mapUserSummary(user));
  }

  private mapUserSummary(user: User | null): UserSummary | null {
    if (!user) {
      return null;
    }

    const userMetadata = user.user_metadata ?? {};
    const name = this.findMetadataString(userMetadata, ['full_name', 'name', 'display_name', 'user_name'])
      ?? user.email?.split('@')[0]
      ?? 'Usuario';

    return {
      greeting: 'Ola,',
      name,
      avatarUrl: this.findMetadataString(userMetadata, ['avatar_url', 'picture', 'photo_url']) ?? undefined,
    };
  }

  private findMetadataString(metadata: Record<string, unknown>, keys: string[]): string | null {
    for (const key of keys) {
      const value = metadata[key];

      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }

    return null;
  }
}
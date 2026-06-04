import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, signal } from '@angular/core';
import type { User } from '@supabase/supabase-js';
import { RouterLink } from '@angular/router';
import { Auth } from '../../core/service/auth';
import { FeatureHeader } from '../../shared/components/feature-header/feature-header';
import { ProfileAvatar } from '../../shared/components/profile-avatar/profile-avatar';

@Component({
  selector: 'app-profile',
  imports: [FeatureHeader, ProfileAvatar, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Profile {
  private readonly authService = inject(Auth);
  private readonly destroyRef = inject(DestroyRef);

  readonly user = signal<User | null>(null);
  readonly isAuthenticated = computed(() => this.user() !== null);

  readonly displayName = computed(() => {
    const user = this.user();

    if (!user) {
      return '';
    }

    const metadata = (user.user_metadata ?? {}) as Record<string, unknown>;

    return this.findMetadataString(metadata, ['full_name', 'name', 'display_name', 'user_name'])
      ?? user.email?.split('@')[0]
      ?? 'Usuario';
  });

  readonly avatarUrl = computed(() => {
    const user = this.user();

    if (!user) {
      return '';
    }

    const metadata = (user.user_metadata ?? {}) as Record<string, unknown>;
    return this.findMetadataString(metadata, ['avatar_url', 'picture', 'photo_url']) ?? '';
  });

  readonly profileFacts = computed(() => {
    const user = this.user();

    if (!user) {
      return [];
    }

    const metadata = (user.user_metadata ?? {}) as Record<string, unknown>;
    const role = this.findMetadataString(metadata, ['role']) ?? 'Membro';
    const phone = this.findMetadataString(metadata, ['phone', 'phone_number']);

    return [
      {
        label: 'Email',
        value: user.email ?? 'Nao informado',
      },
      {
        label: 'Perfil de acesso',
        value: role,
      },
      {
        label: 'Ultimo acesso',
        value: this.formatDate(user.last_sign_in_at),
      },
      {
        label: 'Telefone',
        value: phone ?? 'Nao informado',
      },
    ];
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

  private async syncUser(): Promise<void> {
    const user = await this.authService.getUser();
    this.user.set(user);
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

  private formatDate(value?: string | null): string {
    if (!value) {
      return 'Ainda nao registrado';
    }

    return new Intl.DateTimeFormat('pt-BR', {
      dateStyle: 'short',
      timeStyle: 'short',
    }).format(new Date(value));
  }
}
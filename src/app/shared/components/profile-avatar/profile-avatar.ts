import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-profile-avatar',
  templateUrl: './profile-avatar.html',
  styleUrl: './profile-avatar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileAvatar {
  readonly name = input.required<string>();
  readonly imageSrc = input<string>('');

  readonly initials = computed(() => {
    const parts = this.name()
      .split(' ')
      .filter(Boolean)
      .slice(0, 2);

    return parts.map((part) => part[0]?.toUpperCase() ?? '').join('');
  });
}
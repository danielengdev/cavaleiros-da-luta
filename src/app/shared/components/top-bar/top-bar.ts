import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProfileAvatar } from '../profile-avatar/profile-avatar';

@Component({
  selector: 'app-top-bar',
  imports: [NgOptimizedImage, ProfileAvatar, RouterLink],
  templateUrl: './top-bar.html',
  styleUrl: './top-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopBar {
  readonly greeting = input<string>('Ola,');
  readonly logoSrc = input<string>('/assets/img/cavaleiros-da-luta-logotipo.jpeg');
  readonly userName = input.required<string>();
  readonly avatarSrc = input<string>('');
  readonly menuRoute = input<string>('/menu');
  readonly profileRoute = input<string>('/profile');
}
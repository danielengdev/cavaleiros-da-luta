import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-header',
  imports: [RouterLink],
  templateUrl: './feature-header.html',
  styleUrl: './feature-header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeatureHeader {
  readonly title = input.required<string>();
  readonly description = input<string>('');
  readonly backRoute = input<string | null>('/home');
  readonly backLabel = input<string>('Voltar');
  readonly actionRoute = input<string | null>(null);
  readonly actionAriaLabel = input<string>('Abrir acao');
  readonly actionTitle = input<string>('');
  readonly centered = input<boolean>(false);
}
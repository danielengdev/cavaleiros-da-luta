import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-current-date',
  templateUrl: './current-date.html',
  styleUrl: './current-date.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrentDate {
  readonly label = input.required<string>();
}
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ServiceCard } from '../../models/home.models';

@Component({
  selector: 'app-services-section',
  imports: [RouterLink],
  templateUrl: './services-section.html',
  styleUrl: './services-section.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesSection {
  readonly services = input.required<ServiceCard[]>();
}
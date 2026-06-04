import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';
import { CarouselSlide } from '../../models/home.models';

@Component({
  selector: 'app-home-carousel',
  templateUrl: './home-carousel.html',
  styleUrl: './home-carousel.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeCarousel {
  readonly slides = input.required<CarouselSlide[]>();
  readonly activeIndex = signal(0);

  readonly activeSlide = computed(() => this.slides()[this.activeIndex()] ?? null);

  selectSlide(index: number): void {
    if (index < 0 || index >= this.slides().length) {
      return;
    }

    this.activeIndex.set(index);
  }
}
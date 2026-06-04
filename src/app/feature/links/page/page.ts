import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { LinksService } from '../service/links-service';
import { FeatureHeader } from '../../../shared/components/feature-header/feature-header';

type LinkItem = {
  id?: number | string;
  link: string;
  descricao?: string;
  created_at?: string;
};

@Component({
  selector: 'app-page',
  imports: [FeatureHeader],
  templateUrl: './page.html',
  styleUrl: './page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Page implements OnInit {
  readonly links = signal<LinkItem[]>([]);
  readonly loading = signal<boolean>(false);
  private readonly linksService = inject(LinksService);

  ngOnInit(): void {
    this.loadLinks();
  }

  async loadLinks(): Promise<void> {
    this.loading.set(true);
    try {
      const links = await this.linksService.getLinks();
      this.links.set((links as LinkItem[]) ?? []);
      console.log('Links loaded:', this.links());
    } catch (error) {
      console.error('Error loading links:', error);
    } finally {
      this.loading.set(false);
    }
  }

  extrairDominio(link: string): string {
    try {
      return new URL(link).hostname.replace(/^www\./, '');
    } catch {
      return link;
    }
  }
}
